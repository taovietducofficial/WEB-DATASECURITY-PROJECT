package com.example.oracle.repository;

import com.example.oracle.entity.Resident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidentRepository extends JpaRepository<Resident, Long> {
    // JpaRepository đã cung cấp phương thức save() tự động
}
