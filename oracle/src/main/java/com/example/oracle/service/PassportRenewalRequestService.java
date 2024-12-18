package com.example.oracle.service;

import com.example.oracle.entity.PassportRenewalRequest;
import com.example.oracle.repository.PassportRenewalRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PassportRenewalRequestService {

    @Autowired
    private PassportRenewalRequestRepository repository;

    public List<PassportRenewalRequest> getAllRequests() {
        return repository.findAll();
    }
}

