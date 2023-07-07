package com.cms.cleaningmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Student {
    @Id
    private String studentId;
    private String name;
    private int age;
    private String gender;
    private String contactDetails;
    private Attendance attendance;
    private Result result;
}
