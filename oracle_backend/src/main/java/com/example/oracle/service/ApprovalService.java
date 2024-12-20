package com.example.oracle.service;

import com.example.oracle.dto.ApprovalDTO;
import com.example.oracle.entity.Approval;
import com.example.oracle.repository.ApprovalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ApprovalService {

    @Autowired
    private ApprovalRepository approvalRepository;

    @Transactional(readOnly = true)
    public ApprovalDTO getApprovalById(Long approvalId) {
        Approval approval = approvalRepository.findByApprovalId(approvalId);

        if (approval == null) {
            return null;  // Return null if no Approval found
        }

        // Convert entity to DTO
        ApprovalDTO approvalDTO = new ApprovalDTO();
        approvalDTO.setApprovalId(approval.getApprovalId());
        approvalDTO.setRequestId(approval.getPassportRenewalRequest().getRequestID());
        approvalDTO.setIsApproved(approval.getIsApproved());
        approvalDTO.setApprovalDate(approval.getApprovalDate());
        approvalDTO.setReviewerComments(approval.getReviewerComments());

        return approvalDTO;
    }

    @Transactional(readOnly = true)
    public List<ApprovalDTO> getAllApprovals() {
        List<Approval> approvals = approvalRepository.findAll();

        return approvals.stream()
                .map(approval -> {
                    ApprovalDTO approvalDTO = new ApprovalDTO();
                    approvalDTO.setApprovalId(approval.getApprovalId());
                    approvalDTO.setRequestId(approval.getPassportRenewalRequest().getRequestID());
                    approvalDTO.setIsApproved(approval.getIsApproved());
                    approvalDTO.setApprovalDate(approval.getApprovalDate());
                    approvalDTO.setReviewerComments(approval.getReviewerComments());
                    return approvalDTO;
                })
                .collect(Collectors.toList());
    }

    public ApprovalDTO createApproval(ApprovalDTO approvalDTO) {
        Approval approval = new Approval();
        approval.setIsApproved(approvalDTO.getIsApproved());
        approval.setApprovalDate(approvalDTO.getApprovalDate());
        approval.setReviewerComments(approvalDTO.getReviewerComments());
        // Set PassportRenewalRequest (RequestID) logic
        approvalRepository.save(approval);
        approvalDTO.setApprovalId(approval.getApprovalId());
        return approvalDTO;
    }

    public ApprovalDTO updateApproval(Long approvalId, ApprovalDTO approvalDTO) {
        Optional<Approval> approvalOpt = approvalRepository.findById(approvalId);
        if (approvalOpt.isPresent()) {
            Approval approval = approvalOpt.get();
            approval.setIsApproved(approvalDTO.getIsApproved());
            approval.setApprovalDate(approvalDTO.getApprovalDate());
            approval.setReviewerComments(approvalDTO.getReviewerComments());
            approvalRepository.save(approval);
            return approvalDTO;
        }
        return null;
    }

    public void deleteApproval(Long approvalId) {
        approvalRepository.deleteById(approvalId);
    }
}
