package com.cms.cleaningmanagementsystem.controller;

import com.cms.cleaningmanagementsystem.constant.ERole;
import com.cms.cleaningmanagementsystem.controller.request.LoginRequest;
import com.cms.cleaningmanagementsystem.controller.request.SignupRequest;
import com.cms.cleaningmanagementsystem.controller.response.JwtResponse;
import com.cms.cleaningmanagementsystem.controller.response.MessageResponse;
import com.cms.cleaningmanagementsystem.controller.response.TokenResponse;
import com.cms.cleaningmanagementsystem.model.Role;
import com.cms.cleaningmanagementsystem.model.User;
import com.cms.cleaningmanagementsystem.repository.RoleRepository;
import com.cms.cleaningmanagementsystem.repository.UserRepository;
import com.cms.cleaningmanagementsystem.security.JwtTokenUtil;
import com.cms.cleaningmanagementsystem.service.UserDetailsImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtTokenUtil jwtUtils;

    @Autowired
    ObjectMapper objectMapper;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        Set<String> strRoles = signUpRequest.getRoles();
        Set<ERole> roles = new HashSet<>();

        if (strRoles == null) {
            Optional<Role> userRole = roleRepository.findByeRole(ERole.ROLE_USER.name());
            if(userRole.isEmpty()) {
                roles.add(ERole.ROLE_USER);
            }
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Optional<Role> adminRole = roleRepository.findByeRole(ERole.ROLE_ADMIN.name());
                        if(adminRole.isEmpty()) {
                            roles.add(ERole.ROLE_USER);
                        }
                        break;
                    case "mod":
                        Optional<Role> modRole = roleRepository.findByeRole(ERole.ROLE_MODERATOR.name());
                        if(modRole.isEmpty()) {
                            roles.add(ERole.ROLE_USER);
                        }
                        break;
                    default:
                        Optional<Role> userRole = roleRepository.findByeRole(ERole.ROLE_USER.name());
                        if(userRole.isEmpty()) {
                            roles.add(ERole.ROLE_USER);
                        }
                }
            });
        }
        Role role = new Role(UUID.randomUUID().toString(),roles);
//        role.setId(UUID.randomUUID().toString());
        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),signUpRequest.getFirstName(),signUpRequest.getLastName(),signUpRequest.getAddress(),signUpRequest.getCity(),signUpRequest.getPhone(),role);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<TokenResponse> generateToken(@RequestBody LoginRequest authRequest) throws Exception {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            throw new Exception("INVALID USERNAME/PASSWORD");
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        try {
            // Convert the response object to JSON
            String jsonResponse = objectMapper.writeValueAsString(jwt);

            // Set the appropriate Content-Type header
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            TokenResponse tokenResponse = new TokenResponse();
            tokenResponse.setToken(jsonResponse);
            // Return the response as JSON
            return new ResponseEntity<>(tokenResponse, headers, HttpStatus.OK);
        } catch (JsonProcessingException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to generate token");
        }
    }
}
