package com.example.oracle.dto;

import java.util.Date;

public class ApprovalDTO {

    private Long approvalId;
    private Long requestId;
    private char isApproved;
    private Date approvalDate;
    private String reviewerComments;

    // Getters and Setters
    public Long getApprovalId() {
        return approvalId;
    }

    public void setApprovalId(Long approvalId) {
        this.approvalId = approvalId;
    }

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
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