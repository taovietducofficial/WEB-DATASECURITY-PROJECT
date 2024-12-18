package com.example.oracle.service;

import com.example.oracle.dto.RenewalDTO;
import com.example.oracle.entity.Renewal;
import com.example.oracle.repository.RenewalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RenewalService {

    @Autowired
    private RenewalRepository renewalRepository;

    public List<RenewalDTO> getAllRenewals() {
        List<Renewal> renewals = renewalRepository.findAll();
        return renewals.stream()
                .map(renewal -> new RenewalDTO(
                        renewal.getRenewalID(),
                        renewal.getPassportRenewalRequest().getRequestID(),
                        renewal.getNewExpiryDate(),
                        renewal.getUpdatedAt()))
                .collect(Collectors.toList());
    }

//    public Renewal createRenewal(Renewal renewal) {
//        PassportRenewalRequest request = renewalRepository.findById(renewal.getPassportRenewalRequest().getRequestId())
//                .orElseThrow(() -> new ResourceNotFoundException("Request not found"));
//
//        renewal.setPassportRenewalRequest(request);
//        return renewalRepository.save(renewal);
//    }

    public RenewalDTO updateRenewal(Long renewalID, RenewalDTO renewalDTO) {
        Optional<Renewal> optionalRenewal = renewalRepository.findById(renewalID);

        if (optionalRenewal.isPresent()) {
            Renewal renewal = optionalRenewal.get();
            renewal.setNewExpiryDate(renewalDTO.getNewExpiryDate());
            renewal.setUpdatedAt(renewalDTO.getUpdatedAt());
            Renewal updatedRenewal = renewalRepository.save(renewal);

            return new RenewalDTO(
                    updatedRenewal.getRenewalID(),
                    updatedRenewal.getRenewalID(),
                    updatedRenewal.getNewExpiryDate(),
                    updatedRenewal.getUpdatedAt()
            );
        } else {
            // Trả về null hoặc xử lý mặc định nếu không tìm thấy
            return null;
        }
    }
    public boolean deleteRenewal(Long renewalID) {
        Optional<Renewal> optionalRenewal = renewalRepository.findById(renewalID);

        if (optionalRenewal.isPresent()) {
            renewalRepository.delete(optionalRenewal.get());
            return true; // Xóa thành công
        } else {
            return false; // Không tìm thấy bản ghi để xóa
        }
    }

}

