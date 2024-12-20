package com.example.oracle.controller;

import com.example.oracle.dto.ApprovalDTO;
import com.example.oracle.service.ApprovalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/approvals")
public class ApprovalController {

    @Autowired
    private ApprovalService approvalService;

    // GET: /approvals/{approvalId}
    @GetMapping("/{approvalId}")
    public ResponseEntity<ApprovalDTO> getApproval(@PathVariable Long approvalId) {
        ApprovalDTO approvalDTO = approvalService.getApprovalById(approvalId);

        if (approvalDTO == null) {
            return ResponseEntity.notFound().build();  // Trả về mã 404 nếu không tìm thấy phê duyệt
        }

        return ResponseEntity.ok(approvalDTO);  // Trả về mã 200 cùng dữ liệu ApprovalDTO
    }

    // GET: /approvals
    @GetMapping
    public ResponseEntity<List<ApprovalDTO>> getAllApprovals() {
        try {
            List<ApprovalDTO> approvalDTOs = approvalService.getAllApprovals();
            if (approvalDTOs.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(approvalDTOs);
        } catch (Exception e) {
            // Log lỗi chi tiết
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<ApprovalDTO> createApproval(@RequestBody ApprovalDTO approvalDTO) {
        ApprovalDTO createdApproval = approvalService.createApproval(approvalDTO);
        return ResponseEntity.ok(createdApproval);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApprovalDTO> updateApproval(@PathVariable Long id, @RequestBody ApprovalDTO approvalDTO) {
        ApprovalDTO updatedApproval = approvalService.updateApproval(id, approvalDTO);
        return updatedApproval != null ? ResponseEntity.ok(updatedApproval) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApproval(@PathVariable Long id) {
        approvalService.deleteApproval(id);
        return ResponseEntity.noContent().build();
    }
}