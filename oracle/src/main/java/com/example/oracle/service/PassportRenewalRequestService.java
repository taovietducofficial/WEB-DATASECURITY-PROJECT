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

    // Thêm mới yêu cầu
    public PassportRenewalRequest createRequest(PassportRenewalRequest request) {
        return repository.save(request);
    }

    // Cập nhật yêu cầu
    public PassportRenewalRequest updateRequest(Long id, PassportRenewalRequest updatedRequest) {
        PassportRenewalRequest existingRequest = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Request not found with id: " + id));

        // Cập nhật thông tin
        existingRequest.setResidentID(updatedRequest.getResidentID());
        existingRequest.setSubmissionDate(updatedRequest.getSubmissionDate());
        existingRequest.setStatus(updatedRequest.getStatus());
        existingRequest.setVerificationUnit(updatedRequest.getVerificationUnit());
        existingRequest.setReviewComments(updatedRequest.getReviewComments());

        return repository.save(existingRequest);
    }
}

