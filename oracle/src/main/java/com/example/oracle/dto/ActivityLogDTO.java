package com.example.oracle.dto;

import java.util.Date;

public class ActivityLogDTO {
    private Long LOGID;
    private Long REQUESTID;
    private String STATUS;
    private Date ACTIONTIMESTAMP;
    private String PERFORMEDBY;

    // Constructors, getters and setters
    public ActivityLogDTO(Long LOGID, Long REQUESTID, String STATUS, Date ACTIONTIMESTAMP, String PERFORMEDBY) {
        this.LOGID = LOGID;
        this.REQUESTID = REQUESTID;
        this.STATUS = STATUS;
        this.ACTIONTIMESTAMP = ACTIONTIMESTAMP;
        this.PERFORMEDBY = PERFORMEDBY;
    }

    public Long getLOGID() {
        return LOGID;
    }

    public void setLOGID(Long LOGID) {
        this.LOGID = LOGID;
    }

    public Long getREQUESTID() {
        return REQUESTID;
    }

    public void setREQUESTID(Long REQUESTID) {
        this.REQUESTID = REQUESTID;
    }

    public String getSTATUS() {
        return STATUS;
    }

    public void setSTATUS(String STATUS) {
        this.STATUS = STATUS;
    }

    public Date getACTIONTIMESTAMP() {
        return ACTIONTIMESTAMP;
    }

    public void setACTIONTIMESTAMP(Date ACTIONTIMESTAMP) {
        this.ACTIONTIMESTAMP = ACTIONTIMESTAMP;
    }

    public String getPERFORMEDBY() {
        return PERFORMEDBY;
    }

    public void setPERFORMEDBY(String PERFORMEDBY) {
        this.PERFORMEDBY = PERFORMEDBY;
    }
}
