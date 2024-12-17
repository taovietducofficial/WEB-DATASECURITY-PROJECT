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
}
