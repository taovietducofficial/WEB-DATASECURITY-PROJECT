package com.example.oracle.controller;

import com.example.oracle.dto.RenewalDTO;
import com.example.oracle.service.RenewalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/renewals")
public class RenewalController {

    @Autowired
    private RenewalService renewalService;

    @GetMapping
    public ResponseEntity<List<RenewalDTO>> getAllRenewals() {
        List<RenewalDTO> renewals = renewalService.getAllRenewals();
        return ResponseEntity.ok(renewals); // Trả về ResponseEntity với mã trạng thái 200 OK
    }

//    @PostMapping
//    public ResponseEntity<RenewalDTO> createRenewal(@RequestBody RenewalDTO renewalDTO) {
//        RenewalDTO createdRenewal = renewalService.createRenewal(renewalDTO);
//        return new ResponseEntity<>(createdRenewal, HttpStatus.CREATED);
//    }

//    @PutMapping("/{renewalID}")
//    public ResponseEntity<RenewalDTO> updateRenewal(@PathVariable Long renewalID, @RequestBody RenewalDTO renewalDTO) {
//        RenewalDTO updatedRenewal = renewalService.updateRenewal(renewalID, renewalDTO);
//        return new ResponseEntity<>(updatedRenewal, HttpStatus.OK);
//    }


    @DeleteMapping("/{renewalID}")
    public ResponseEntity<String> deleteRenewal(@PathVariable Long renewalID) {
        renewalService.deleteRenewal(renewalID);
        return new ResponseEntity<>("Renewal record deleted successfully", HttpStatus.OK);
    }
}

