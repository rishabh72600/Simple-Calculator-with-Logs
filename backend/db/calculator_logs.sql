CREATE DATABASE IF NOT EXISTS calculator_logs;

USE calculator_logs;

CREATE TABLE IF NOT EXISTS calculation_log (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    calculation VARCHAR(255) NOT NULL
);
