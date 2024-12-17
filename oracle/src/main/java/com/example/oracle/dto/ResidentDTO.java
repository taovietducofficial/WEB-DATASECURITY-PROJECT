package com.example.oracle.dto;

import com.example.oracle.entity.Resident;

public class ResidentDTO {
    private Long residentID;
    private String fullName;
    private String gender;
    private String address;
    private String district;
    private String idCardNumber;
    private String phoneNumber;
    private String email;
    private String passportNumber;

    // Constructor không tham số (optional, cho trường hợp khởi tạo đối tượng rỗng)
    public ResidentDTO() {}

    // Constructor chuyển từ Entity sang DTO
    public ResidentDTO(Resident resident) {
        this.residentID = resident.getResidentID();
        this.fullName = safeGet(resident.getFullName());
        this.gender = safeGet(resident.getGender());
        this.address = safeGet(resident.getAddress());
        this.district = safeGet(resident.getDistrict());
        this.idCardNumber = safeGet(resident.getIdCardNumber());
        this.phoneNumber = safeGet(resident.getPhoneNumber());
        this.email = safeGet(resident.getEmail());
        this.passportNumber = safeGet(resident.getPassportNumber());
    }

    // Phương thức hỗ trợ kiểm tra null và thay thế bằng "N/A"
    private String safeGet(String value) {
        return (value != null) ? value : "N/A";
    }

    // Getters
    public Long getResidentID() {
        return residentID;
    }

    public String getFullName() {
        return fullName;
    }

    public String getGender() {
        return gender;
    }

    public String getAddress() {
        return address;
    }

    public String getDistrict() {
        return district;
    }

    public String getIdCardNumber() {
        return idCardNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    // Setters
    public void setResidentID(Long residentID) {
        this.residentID = residentID;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public void setIdCardNumber(String idCardNumber) {
        this.idCardNumber = idCardNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }
}
