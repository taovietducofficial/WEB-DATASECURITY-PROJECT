package com.example.oracle.controller;

import com.example.oracle.entity.PassportRenewalRequest;
import com.example.oracle.service.PassportRenewalRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // API thêm mới yêu cầu (POST)
    @PostMapping
    public ResponseEntity<PassportRenewalRequest> createRequest(@RequestBody PassportRenewalRequest request) {
        PassportRenewalRequest createdRequest = service.createRequest(request);
        return ResponseEntity.ok(createdRequest);
    }

    // API cập nhật yêu cầu (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<PassportRenewalRequest> updateRequest(
            @PathVariable Long id, @RequestBody PassportRenewalRequest updatedRequest) {
        PassportRenewalRequest request = service.updateRequest(id, updatedRequest);
        return ResponseEntity.ok(request);
    }
}
