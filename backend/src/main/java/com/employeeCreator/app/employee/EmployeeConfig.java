package com.employeeCreator.app.employee;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class EmployeeConfig {

    @Bean
    CommandLineRunner commandLineRunner(EmployeeRepository employeeRepository) {
        return args -> {
            Employee john = new Employee(
                    "John",
                    "Bill",
                    "Hope",
                    "0412223344",
                    "Bob@bill.usa",
                    "Cali",
                    LocalDate.of(1879, 03, 17),
                    LocalDate.of(1889, 06, 30),
                    "Permanent",
                    "Full time",
                    "38");

            Employee will = new Employee(
                    "Will",
                    "Wild",
                    "Macca",
                    "0499998888",
                    "Will@bill.usa",
                    "45 Boulter Close, Vasa Views, QLD",
                    LocalDate.of(2000, 03, 17),
                    LocalDate.of(2005, 06, 30),
                    "Permanent",
                    "Part time",
                    "25");

            Employee maddie = new Employee(
                    "Maddie",
                    "Helen",
                    "Jones",
                    "0477778888",
                    "maddie@jones.usa",
                    "31 Glen William Road, Einasleigh, QLD",
                    LocalDate.of(2010, 03, 17),
                    LocalDate.of(2018, 06, 30),
                    "Contract",
                    "Full time",
                    "38");

            Employee rosie = new Employee(
                    "Rosie",
                    "Margaux",
                    "Bloom",
                    "0499998888",
                    "rosie@bloom.usa",
                    "70 Meyer Road, Cambrai, South Australia, NSW",
                    LocalDate.of(2000, 03, 17),
                    LocalDate.of(2005, 06, 30),
                    "Permanent",
                    "Part time",
                    "25");

            employeeRepository.saveAll(List.of(john, will, maddie, rosie));

        };

    }
}
