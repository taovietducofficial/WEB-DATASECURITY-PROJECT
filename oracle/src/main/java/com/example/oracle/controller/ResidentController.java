package com.example.oracle.controller;

import com.example.oracle.entity.Resident;
import com.example.oracle.service.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residents")
public class ResidentController {

    @Autowired
    private ResidentService residentService;

    // API GET - Lấy danh sách Residents
    @GetMapping
    public List<Resident> getAllResidents() {
        return residentService.getAllResidents(); // Gọi service để lấy danh sách residents
    }

    // API POST - Thêm mới một Resident

    @PostMapping("/create")
    public Resident createResident(@RequestBody Resident resident) {
        return residentService.createResident(resident);
    }
}
