package com.example.oracle.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Resident")
public class Resident {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long residentID;

    @Column(name = "FULLNAME", nullable = false)
    private String fullName;

    @Column(name = "GENDER", nullable = false)
    private String gender;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "DISTRICT", nullable = false)
    private String district;

    @Column(name = "IDCARDNUMBER", unique = true)
    private String idCardNumber;

    @Column(name = "PHONENUMBER", unique = true)
    private String phoneNumber;

    @Column(name = "EMAIL", unique = true)
    private String email;

    @Column(name = "PASSPORTNUMBER", unique = true)
    private String passportNumber;

    // Getters và setters
    public Long getResidentID() {
        return residentID;
    }

    public void setResidentID(Long residentID) {
        this.residentID = residentID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getIdCardNumber() {
        return idCardNumber;
    }

    public void setIdCardNumber(String idCardNumber) {
        this.idCardNumber = idCardNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }
}


