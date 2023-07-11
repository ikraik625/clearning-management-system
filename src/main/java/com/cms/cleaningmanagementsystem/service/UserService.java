package com.cms.cleaningmanagementsystem.service;

import com.cms.cleaningmanagementsystem.model.User;

public interface UserService {

    User getUserById(String id);

    User createUser(User user);

    User updateUser(String id , User user);

    void deleteUser(String id);

}
