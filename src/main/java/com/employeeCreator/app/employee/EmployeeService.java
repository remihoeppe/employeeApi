package com.employeeCreator.app.employee;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

        @Autowired
        public EmployeeService(EmployeeRepository employeeRepository) {
            this.employeeRepository = employeeRepository;
        }

    	public List<Employee> getEmployees() {
		    return employeeRepository.findAll();
	}

	    public void addNewEmployee(Employee employee) {
            System.out.println(employee);
    }
}