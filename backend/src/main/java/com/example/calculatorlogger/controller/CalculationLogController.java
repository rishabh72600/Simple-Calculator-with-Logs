package com.example.calculatorlogger.controller;

import com.example.calculatorlogger.model.CalculationLog;
import com.example.calculatorlogger.repository.CalculationLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow all origins for testing
public class CalculationLogController {

    @Autowired
    private CalculationLogRepository repository;

    @PostMapping("/log")
    public void logCalculation(@RequestBody CalculationLog calculationLog) {
        System.out.println("Received log: " + calculationLog.getCalculation());
        repository.save(calculationLog);
        System.out.println("Log saved.");
    }

    @GetMapping("/logs")
    public List<CalculationLog> getAllLogs() {
        System.out.println("Fetching all logs.");
        return repository.findAll();
    }

    @DeleteMapping("/logs")
    public void deleteAllLogs() {
        System.out.println("Deleting all logs.");
        repository.deleteAll();
    }
}
