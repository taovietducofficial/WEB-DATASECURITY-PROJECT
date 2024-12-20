package com.example.oracle.dto;

public class PassportRenewalRequestDTO {
    private Long residentID;
    private String status;
    private String verificationUnit;
    private String reviewComments;

    // Getters and Setters
    public Long getResidentID() {
        return residentID;
    }

    public void setResidentID(Long residentID) {
        this.residentID = residentID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getVerificationUnit() {
        return verificationUnit;
    }

    public void setVerificationUnit(String verificationUnit) {
        this.verificationUnit = verificationUnit;
    }

    public String getReviewComments() {
        return reviewComments;
    }

    public void setReviewComments(String reviewComments) {
        this.reviewComments = reviewComments;
    }
}
