package com.cms.cleaningmanagementsystem.service;

import com.cms.cleaningmanagementsystem.model.User;

import java.util.List;

public interface UserService {

    User getUserByUsername(String username);

    User getUserByLastName(String lastName);

    List<User> getAllUsers();

    User createUser(User user);

    User updateUser(String username , User user);

    void deleteUser(String username);

}
