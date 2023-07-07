package com.cms.cleaningmanagementsystem.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "reservations")
@Data
public class Reservation {
    @Id
    private String id;
    private String customerId;
    private LocalDateTime startDateTime;
    private LocalDateTime endDateTime;
    private boolean confirmed;
}
