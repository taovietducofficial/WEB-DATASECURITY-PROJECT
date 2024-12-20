package com.example.oracle.repository;

import com.example.oracle.entity.Approval;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ApprovalRepository extends JpaRepository<Approval, Long> {

    // Lấy tất cả các phê duyệt
    List<Approval> findAll();

    Approval findByApprovalId(Long approvalId);
}