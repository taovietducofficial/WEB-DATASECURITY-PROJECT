package com.example.oracle.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ACTIVITYLOG") // Bảng với tên IN HOA
public class ActivityLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LOGID") // Tên cột IN HOA
    private Long logId;

    @Column(name = "REQUESTID", nullable = false) // Tên cột IN HOA
    private Long requestId;

    @Column(name = "STATUS", length = 20, nullable = false) // Tên cột IN HOA
    private String status;

    @Column(name = "ACTIONTIMESTAMP", nullable = false) // Tên cột IN HOA
    @Temporal(TemporalType.TIMESTAMP)
    private Date actionTimestamp;

    @Column(name = "PERFORMEDBY", length = 50, nullable = false) // Tên cột IN HOA
    private String performedBy;

    // Getters and setters
    public Long getLogId() {
        return logId;
    }

    public void setLogId(Long logId) {
        this.logId = logId;
    }

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getActionTimestamp() {
        return actionTimestamp;
    }

    public void setActionTimestamp(Date actionTimestamp) {
        this.actionTimestamp = actionTimestamp;
    }

    public String getPerformedBy() {
        return performedBy;
    }

    public void setPerformedBy(String performedBy) {
        this.performedBy = performedBy;
    }
}
