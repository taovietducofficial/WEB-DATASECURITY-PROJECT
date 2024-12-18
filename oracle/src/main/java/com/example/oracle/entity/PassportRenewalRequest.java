package com.example.oracle.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "PASSPORTRENEWALREQUEST") // Tên bảng viết IN HOA
public class PassportRenewalRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REQUESTID")
    private Long requestID;

    @Column(name = "RESIDENTID", nullable = false)
    private Long residentID;

    @Column(name = "SUBMISSIONDATE", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date submissionDate;

    @Column(name = "STATUS", nullable = false, length = 20)
    private String status;

    @Column(name = "VERIFICATIONUNIT", length = 10)
    private String verificationUnit;

    @Column(name = "REVIEWCOMMENTS", length = 255)
    private String reviewComments;

    // Getters và Setters
    public Long getRequestID() { return requestID; }
    public void setRequestID(Long requestID) { this.requestID = requestID; }

    public Long getResidentID() { return residentID; }
    public void setResidentID(Long residentID) { this.residentID = residentID; }

    public Date getSubmissionDate() { return submissionDate; }
    public void setSubmissionDate(Date submissionDate) { this.submissionDate = submissionDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getVerificationUnit() { return verificationUnit; }
    public void setVerificationUnit(String verificationUnit) { this.verificationUnit = verificationUnit; }

    public String getReviewComments() { return reviewComments; }
    public void setReviewComments(String reviewComments) { this.reviewComments = reviewComments; }
}
