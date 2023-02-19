package com.employeeCreator.app.employee;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class EmployeeRepositoryTest {

    @Autowired
    private EmployeeRepository underTest;

    @Test
    void itShouldFindEmployeeByEmail() {

        //Given
        String email = "NewEmployee@bill.com";
        Employee employee = new Employee(
                "John",
                "Bill",
                "H.",
                "6666666",
                email,
                "Cali",
                LocalDate.of(2000,03,17),
                LocalDate.of(2020,06,30),
                "Permanent",
                "Full Time",
                "38"
        );

        underTest.save(employee);

        //When
        Optional<Employee> foundEmployee = underTest.findEmployeeByEmail(email);

        //Then
        assertThat(foundEmployee.isPresent());
    }
}
