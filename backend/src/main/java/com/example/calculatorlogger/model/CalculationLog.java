package com.example.calculatorlogger.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CalculationLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String calculation;

    public CalculationLog() {
    }

    public CalculationLog(String calculation) {
        this.calculation = calculation;
    }

    public Long getId() {
        return id;
    }

    public String getCalculation() {
        return calculation;
    }

    public void setCalculation(String calculation) {
        this.calculation = calculation;
    }
}
