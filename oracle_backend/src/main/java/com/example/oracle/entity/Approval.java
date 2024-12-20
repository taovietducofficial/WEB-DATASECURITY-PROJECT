package com.example.oracle.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "approval")
public class Approval {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "approvalid")  // Ánh xạ chính xác với cột APPROVALID trong cơ sở dữ liệu
    private Long approvalId;

    @ManyToOne
    @JoinColumn(name = "requestid", referencedColumnName = "requestid")
    private PassportRenewalRequest passportRenewalRequest;

    @Column(name = "isapproved", nullable = false)
    private char isApproved;

    @Temporal(TemporalType.DATE)
    @Column(name = "approvaldate", nullable = false)
    private Date approvalDate;

    @Column(name = "reviewercomments", length = 255)  // Ánh xạ với cột REVIEWERCOMMENTS trong cơ sở dữ liệu
    private String reviewerComments;

    // Getters and Setters
    public Long getApprovalId() {
        return approvalId;
    }

    public void setApprovalId(Long approvalId) {
        this.approvalId = approvalId;
    }

    public PassportRenewalRequest getPassportRenewalRequest() {
        return passportRenewalRequest;
    }

    public void setPassportRenewalRequest(PassportRenewalRequest passportRenewalRequest) {
        this.passportRenewalRequest = passportRenewalRequest;
    }

    public char getIsApproved() {
        return isApproved;
    }

    public void setIsApproved(char isApproved) {
        this.isApproved = isApproved;
    }

    public Date getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(Date approvalDate) {
        this.approvalDate = approvalDate;
    }

    public String getReviewerComments() {
        return reviewerComments;
    }

    public void setReviewerComments(String reviewerComments) {
        this.reviewerComments = reviewerComments;
    }
}
