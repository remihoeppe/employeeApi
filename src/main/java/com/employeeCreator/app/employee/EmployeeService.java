package com.employeeCreator.app.employee;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

        @Autowired
        private EmployeeMapper employeeMapper;

        @Autowired
        public EmployeeService(EmployeeRepository employeeRepository) {
            this.employeeRepository = employeeRepository;
        }

        public Employee getEmployeeById(Long employeeId) {
            Employee employee = employeeRepository.findById(employeeId)
                    .orElseThrow(() -> new NoSuchElementException(
                            String.format("No employee with the ID %s could be " +
                            "found", employeeId)));

            return employee;
        }

    	public List<Employee> getEmployees() {
		    return employeeRepository.findAll();
	    }

	    public Employee addNewEmployee(EmployeeDTO employeeData) {
            Optional<Employee> employeeOptional =
                    employeeRepository.findEmployeeByEmail(employeeData.getEmail());

            if (employeeOptional.isPresent()) {
                throw new IllegalStateException("This email is already taken");
            };

            Employee newEmployee =
                    this.employeeMapper.employeeDtoToEmployee(employeeData);
            employeeRepository.save(newEmployee);
            return newEmployee;
        }

        public Employee updateEmployeeDetails(Long employeeId, EmployeeDTO employeeData) {
            Optional<Employee> currentEmployee = employeeRepository.findById(employeeId);

            Employee updatedEmployee;
            if(currentEmployee.isPresent()) {
                updatedEmployee = currentEmployee.get();
            } else {
                Optional<Employee> optionalEmployee = employeeRepository.findEmployeeByEmail(employeeData.getEmail());
                if (optionalEmployee.isPresent()) {
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
