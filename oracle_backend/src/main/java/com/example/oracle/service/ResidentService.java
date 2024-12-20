package com.example.oracle.service;

import com.example.oracle.entity.Resident;
import com.example.oracle.repository.ResidentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentService {

    private static final Logger logger = LoggerFactory.getLogger(ResidentService.class);

    @Autowired
    private ResidentRepository residentRepository;

    public List<Resident> getAllResidents() {
        List<Resident> residents = residentRepository.findAll();
        residents.forEach(resident -> logger.info("Resident: {}", resident)); // Log từng bản ghi
        return residents;
    }
    public Resident createResident(Resident resident) {
        // Sử dụng phương thức save để tạo mới hoặc cập nhật đối tượng Resident
        return residentRepository.save(resident);
    }

    public Resident updateResident(Long residentid, Resident updatedResident) {
        // Kiểm tra xem Resident có tồn tại không
        Resident resident = residentRepository.findById(residentid)
                .orElseThrow(() -> new IllegalArgumentException("Resident not found with id " + residentid));

        // Cập nhật các trường thông tin
        resident.setAddress(updatedResident.getAddress());
        resident.setDistrict(updatedResident.getDistrict());
        resident.setEmail(updatedResident.getEmail());
        resident.setFullName(updatedResident.getFullName());
        resident.setGender(updatedResident.getGender());
        resident.setIdCardNumber(updatedResident.getIdCardNumber());
        resident.setPassportNumber(updatedResident.getPassportNumber());
        resident.setPhoneNumber(updatedResident.getPhoneNumber());

        return residentRepository.save(resident); // Lưu thông tin đã cập nhật
    }

    // Phương thức xóa thông tin
    public void deleteResident(Long residentid) {
        Resident resident = residentRepository.findById(residentid)
                .orElseThrow(() -> new IllegalArgumentException("Resident not found with id " + residentid));
        residentRepository.delete(resident);  // Xoá resident
    }
}
