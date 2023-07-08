package com.cms.cleaningmanagementsystem.repository;

import com.cms.cleaningmanagementsystem.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByeRole(String eRole);
}
