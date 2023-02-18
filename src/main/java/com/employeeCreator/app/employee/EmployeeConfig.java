package com.employeeCreator.app.employee;

import java.time.LocalDate;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.CommandLineRunner;

@Configuration
public class EmployeeConfig {

    @Bean
    CommandLineRunner commandlineRunner(EmployeeRepository employeeRepository) {
        return args -> {
            Employee remi = new Employee(
                    "Remi",
                    "M",
                    "H",
                    "0604",
                    "test@test.com",
                    "Sydney",
                    LocalDate.of(2022, 01, 1),
                    LocalDate.of(2022, 01, 12),
                    "Contract",
                    "Full time",
                    "38");

            Employee john = new Employee(
                    "John",
                    "M",
                    "H",
                    "0604",
                    "john@test.com",
                    "Sydney",
                    LocalDate.of(2010, 01, 1),
                    LocalDate.of(2022, 01, 12),
                    "Contract",
                    "Full time",
                    "38");

            employeeRepository.saveAll(List.of(remi, john));
        };
    }
}
