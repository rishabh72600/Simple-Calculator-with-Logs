package com.example.calculatorlogger.repository;

import com.example.calculatorlogger.model.CalculationLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalculationLogRepository extends JpaRepository<CalculationLog, Long> {
}
