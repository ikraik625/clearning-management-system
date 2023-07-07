package com.cms.cleaningmanagementsystem.repository;

import com.cms.cleaningmanagementsystem.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

}