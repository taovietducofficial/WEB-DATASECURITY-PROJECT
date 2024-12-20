package com.example.oracle.repository;

import com.example.oracle.entity.PassportRenewalRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassportRenewalRequestRepository extends JpaRepository<PassportRenewalRequest, Long> {
}
