package com.employeeCreator.app.employee;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mapstruct.factory.Mappers;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;

import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

import static org.assertj.core.api.InstanceOfAssertFactories.optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = {EmployeeMapperImpl.class})
@ExtendWith(MockitoExtension.class)
class EmployeeServiceTest {

    @Mock
    private EmployeeRepository employeeRepository;

//    @Autowired
    private EmployeeService underTest;

    @Mock
    private EmployeeMapper employeeMapper = Mappers.getMapper(EmployeeMapper.class);

    @BeforeEach
    void setUp() {
        underTest = new EmployeeService(employeeRepository, employeeMapper);
    }

    @Test
    void canGetAllEmployees() {
        // When
        underTest.getEmployees();
        // Then
        verify(employeeRepository).findAll();
        //
    }

    @Test
    void canAddNewEmployee() {
        // Given (an employeeDT0)
        EmployeeDTO employeeData = new EmployeeDTO(
                "John",
                "Bill",
                "H.",
                "6666666",
                "john@bill.com",
                "Cali",
                LocalDate.of(2000,03,17),
                LocalDate.of(2020,06,30),
                "Permanent",
                "Full Time",
                "38"
        );
        Employee newEmployee =
              employeeMapper.employeeDtoToEmployee(employeeData);
        //When
        underTest.addNewEmployee(employeeData);
        //Then (save an Employee)
        ArgumentCaptor<Employee> employeeArgumentCaptor =
                ArgumentCaptor.forClass(Employee.class);
        verify(employeeRepository).save(employeeArgumentCaptor.capture());
        Employee capturedEmployee = employeeArgumentCaptor.getValue();
        assertThat(capturedEmployee).isEqualTo(newEmployee);
    }

    @Test
    void willThrowErrorWhenNewEmployeeEmailIsTaken() {
        // Given (an employeeDT0)
        EmployeeDTO newEmployee = new EmployeeDTO(
                "John",
                "Bill",
                "H.",
                "6666666",
                "john@bill.com",
                "Cali",
                LocalDate.of(2000,03,17),
                LocalDate.of(2020,06,30),
                "Permanent",
                "Full Time",
                "38"
        );

        given(employeeRepository.findEmployeeByEmail(newEmployee.getEmail()).isPresent()).willReturn(true);

        //When - Then
        assertThatThrownBy(() -> underTest.addNewEmployee(newEmployee))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("This email is already taken");


    }

    @Test
    @Disabled
    void getEmployeeById() {
        //When

        //Then
    }



    @Test
    @Disabled
    void updateEmployeeDetails() {
        //When

        //Then
    }

    @Test
    @Disabled
    void deleteEmployee() {
        //When

        //Then
    }
}
