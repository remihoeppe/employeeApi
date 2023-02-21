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
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.time.LocalDate;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = {EmployeeMapperImpl.class})
@ExtendWith(MockitoExtension.class)
class EmployeeServiceTest {
    @Mock
    private EmployeeRepository employeeRepository;
    private EmployeeService underTest;
    @Mock
    private EmployeeMapper employeeMapper = Mappers.getMapper(EmployeeMapper.class);
    @BeforeEach
    void setUp() {
        underTest = new EmployeeService(employeeRepository, employeeMapper);
    }


    @Test
    @Disabled
    void getEmployeeById() {
        //Given
        long id = 1;
        //When
        underTest.getEmployeeById(id);
        //Then
        verify(employeeRepository).findById(id);
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
        given(employeeRepository.selectExistsEmail(anyString())).willReturn(true);
        //When - Then
        assertThatThrownBy(() -> underTest.addNewEmployee(newEmployee))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("This email is already taken");
        verify(employeeRepository, never()).save(any());
    }

    @Test
    @Disabled
    void updateEmployeeDetails() {
        //Given
        long id = 1;
        EmployeeDTO employeeData = new EmployeeDTO(
            "John",
                    "Mac",
                    "H.",
                    "6666666",
                    "john@bill.com",
                    "NSW",
                    LocalDate.of(2000,03,17),
                    LocalDate.of(2020,06,30),
                    "Permanent",
                    "Full Time",
                    "38"
        );
        //When
        given(employeeRepository.existsById(id)).willReturn(true);
        //Then
        //When
        underTest.addNewEmployee(employeeData);
        Employee newEmployee =
                employeeMapper.employeeDtoToEmployee(employeeData);
        //Then (save an Employee)
        ArgumentCaptor<Employee> employeeArgumentCaptor =
                ArgumentCaptor.forClass(Employee.class);
        assertThat(verify(employeeRepository).findById(id)).isEqualTo(2);
        verify(employeeRepository).save(employeeArgumentCaptor.capture());
        Employee capturedEmployee = employeeArgumentCaptor.getValue();
        assertThat(capturedEmployee).isEqualTo(newEmployee);
    }

    @Test
    void canDeleteEmployee() {
        //Given
        long id = 1;
        given(employeeRepository.existsById(id)).willReturn(true);
        //When
        underTest.deleteEmployee(id);
        //Then
        verify(employeeRepository).deleteById(id);
    }

    @Test
    void deleteWillThrowIfEmployeeIdDoesNotExist() {
        //Given
        long id = 99;
        given(employeeRepository.existsById(id)).willReturn(false);
        //When - Then
        assertThatThrownBy(() -> underTest.deleteEmployee(id))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining( "Employee with id " + id + " does not " +
                        "exist");
        verify(employeeRepository, never()).deleteById(any());
    }

}
