package com.employeeCreator.app.employee;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class EmployeeConfig {

    @Bean
    CommandLineRunner commandLineRunner(EmployeeRepository employeeRepository){
        return args -> {
            Employee john = new Employee(
                "John",
                "Bill",
                "H.",
                "6666666",
                "Bob@bill.usa",
                "Cali",
                LocalDate.of(1879,03,17),
                LocalDate.of(1889,06,30),
                "Permanent",
                "Full Time",
                "38"
            );

            Employee will = new Employee(
                    "Will",
                    "Wild",
                    "H.",
                    "00000",
                    "Will@bill.usa",
                    "Cali",
                    LocalDate.of(2000,03,17),
                    LocalDate.of(2005,06,30),
                    "Permanent",
                    "Full Time",
                    "25"
            );

            employeeRepository.saveAll(List.of(john, will));

        };

    }
}
