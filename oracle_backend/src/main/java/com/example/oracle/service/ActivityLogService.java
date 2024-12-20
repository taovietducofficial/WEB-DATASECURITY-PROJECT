package com.example.oracle.service;

import com.example.oracle.dto.ActivityLogDTO;
import com.example.oracle.entity.ActivityLog;
import com.example.oracle.repository.ActivityLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityLogService {
    @Autowired
    private ActivityLogRepository activityLogRepository;

    public List<ActivityLogDTO> getAllActivityLogs() {
        List<ActivityLog> logs = activityLogRepository.findAll();
        return logs.stream().map(log -> new ActivityLogDTO(
                log.getLogId(),
                log.getRequestId(),
                log.getStatus(),
                log.getActionTimestamp(),
                log.getPerformedBy()
        )).collect(Collectors.toList());
    }
}

