package com.cms.cleaningmanagementsystem.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public enum Role {
    ROLE_USER,
    ROLE_MODERATOR,
    ROLE_ADMIN
}
