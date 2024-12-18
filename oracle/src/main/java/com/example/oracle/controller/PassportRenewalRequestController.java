package com.example.oracle.controller;

import com.example.oracle.entity.PassportRenewalRequest;
import com.example.oracle.service.PassportRenewalRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/passport-renewal")
public class PassportRenewalRequestController {

    @Autowired
    private PassportRenewalRequestService service;

    @GetMapping
    public ResponseEntity<List<PassportRenewalRequest>> getAllRequests() {
        List<PassportRenewalRequest> requests = service.getAllRequests();
        return ResponseEntity.ok(requests);
    }
}
