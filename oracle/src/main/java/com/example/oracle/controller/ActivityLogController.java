package com.example.oracle.controller;

import com.example.oracle.dto.ActivityLogDTO;
import com.example.oracle.service.ActivityLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/activity-logs")
public class ActivityLogController {
    @Autowired
    private ActivityLogService activityLogService;

    @GetMapping
    public List<ActivityLogDTO> getAllActivityLogs() {
        return activityLogService.getAllActivityLogs();
    }
}