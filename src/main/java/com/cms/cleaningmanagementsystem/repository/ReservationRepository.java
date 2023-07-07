package com.cms.cleaningmanagementsystem.repository;

import com.cms.cleaningmanagementsystem.model.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends MongoRepository<Reservation, String> {
}
