package com.example.oracle.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Renewal")
public class Renewal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RENEWALID")  // Đổi tên cột thành chữ hoa
    private Long renewalID;



    @ManyToOne
    @JoinColumn(name = "REQUESTID", nullable = false)  // Đổi tên cột thành chữ hoa
    private PassportRenewalRequest passportRenewalRequest;

    @Column(name = "NEWEXPIRYDATE", nullable = false)  // Đổi tên cột thành chữ hoa
    @Temporal(TemporalType.DATE) // Sử dụng TemporalType.DATE cho ngày (không có thời gian)
    private Date newExpiryDate;

    @Column(name = "UPDATEDAT", nullable = false)  // Đổi tên cột thành chữ hoa
    @Temporal(TemporalType.TIMESTAMP) // Sử dụng TemporalType.TIMESTAMP cho ngày và giờ
    private Date updatedAt;

    // Getters and Setters
    public Long getRenewalID() {
        return renewalID;
    }

    public void setRenewalID(Long renewalID) {
        this.renewalID = renewalID;
    }

    public PassportRenewalRequest getPassportRenewalRequest() {
        return passportRenewalRequest;
    }

    public void setPassportRenewalRequest(PassportRenewalRequest passportRenewalRequest) {
        this.passportRenewalRequest = passportRenewalRequest;
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
