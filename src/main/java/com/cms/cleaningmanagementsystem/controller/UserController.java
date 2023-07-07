package com.cms.cleaningmanagementsystem.controller;

import com.cms.cleaningmanagementsystem.model.User;
import com.cms.cleaningmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

        public UserController(UserService userService) {
            this.userService = userService;
        }
        @PreAuthorize("hasRole('ADMIN')")
        @GetMapping("/{id}")
        public User getUserById(@PathVariable String id) {
            return userService.getUserById(id);
        }
        @PreAuthorize("hasRole('ADMIN')")
        @PostMapping
        public User createUser(@RequestBody User user) {
            return userService.createUser(user);
        }

        @PreAuthorize("hasRole('ADMIN')")
        @PutMapping("/{id}")
        public User updateUser(@PathVariable String id, @RequestBody User user) {
            return userService.updateUser(id, user);
        }
        @PreAuthorize("hasRole('ADMIN')")
        @DeleteMapping("/{id}")
        public void deleteUser(@PathVariable String id) {
            userService.deleteUser(id);
        }
//    @PostMapping("")
//    public ResponseEntity<?> createStudent(@RequestBody Student student){
//        userService.saveOrUpdateStudent(student);
//        return new ResponseEntity<>("Student added successfully", HttpStatus.OK);
//    }
//
//    @PostMapping("/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
//    public void deleteStudent(@PathVariable String id){
//        userService.deleteStudent(id);
//    }
//
//    @GetMapping("/list")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> listStudent(){
//        List<Student> result = userService.findAll();
//        return new ResponseEntity<>(result, HttpStatus.OK);
//    }
//
//    @GetMapping(value="/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> getById(@RequestParam("id") String id) {
//        Optional<Student> result = userService.getById(id);
//            return new ResponseEntity<>(result, HttpStatus.OK);
//    }
}
