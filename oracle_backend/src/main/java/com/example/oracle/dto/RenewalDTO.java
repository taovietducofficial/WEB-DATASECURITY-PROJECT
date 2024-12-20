package com.example.oracle.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class RenewalDTO {

    @Id
    @Column(name = "RENEWALID")
    private Long renewalID;

    @Column(name = "REQUESTID")
    private Long requestID;

    @Column(name = "NEWEXPIRYDATE")
    private Date newExpiryDate;

    @Column(name = "UPDATEDAT")
    private Date updatedAt;

    // Constructors
    public RenewalDTO() {}

    public RenewalDTO(Long renewalID, Long requestID, Date newExpiryDate, Date updatedAt) {
        this.renewalID = renewalID;
        this.requestID = requestID;
        this.newExpiryDate = newExpiryDate;
        this.updatedAt = updatedAt;
    }

    // Getters and Setters
    public Long getRenewalID() {
        return renewalID;
    }

    public void setRenewalID(Long renewalID) {
        this.renewalID = renewalID;
    }

    public Long getRequestID() {
        return requestID;
    }

    public void setRequestID(Long requestID) {
        this.requestID = requestID;
    }

    public Date getNewExpiryDate() {
        return newExpiryDate;
    }

    public void setNewExpiryDate(Date newExpiryDate) {
        this.newExpiryDate = newExpiryDate;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
