package com.employeeCreator.app.employee;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
        @Autowired
        private EmployeeMapper employeeMapper;

        @Autowired
        public EmployeeService(EmployeeRepository employeeRepository,
                               EmployeeMapper employeeMapper) {
            this.employeeRepository = employeeRepository;
            this.employeeMapper = employeeMapper;

        }

        public Employee getEmployeeById(Long employeeId) {
            Employee employee = employeeRepository.findById(employeeId)
                    .orElseThrow(() -> new NoSuchElementException(
                            String.format("No employee with the ID %s could be " +
                            "found", employeeId)));
            return employee;
        }

    	public List<Employee> getEmployees() {
		    return employeeRepository.findAll().stream()
                    .filter(employee -> employee.getDeleted().equals(false))
                    .collect(Collectors.toList());
	    }

	    public Employee addNewEmployee(EmployeeDTO employeeData) {
            Boolean emailExists =
                    employeeRepository.existsByEmail(employeeData.getEmail());
            if (emailExists) {
                throw new IllegalStateException("This email is already taken");
            };
            Employee newEmployee =
                    this.employeeMapper.employeeDtoToEmployee(employeeData);
            employeeRepository.save(newEmployee);
            return newEmployee;
        }

        public Employee updateEmployeeDetails(Long employeeId, EmployeeDTO employeeData) {
            boolean exists = employeeRepository.findById(employeeId).isPresent();
            Employee updatedEmployee;
            if(exists) {
                updatedEmployee =  employeeRepository.findById(employeeId).get();
            } else {
                Boolean emailExists =
                        employeeRepository.existsByEmail(employeeData.getEmail());
                if (emailExists) {
                    throw new IllegalStateException("This email is already taken");
                };
                updatedEmployee = new Employee();
            }
            employeeMapper.updateEmployeeFromDto(employeeData, updatedEmployee);
            employeeRepository.save(updatedEmployee);
            return updatedEmployee;
        }

        public void deleteEmployee(Long employeeId) {
            boolean exists = employeeRepository.existsById(employeeId);
            if(!exists) {
                throw new IllegalStateException(
                        "Employee with id " + employeeId + " does not exist"
                );
            }
            employeeRepository.deleteById(employeeId);
        }
}
