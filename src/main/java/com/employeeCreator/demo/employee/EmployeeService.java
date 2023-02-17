package com.employeeCreator.demo.employee;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    	public List<Employee> getEmployees() {
		return List.of(new Employee(1L, "R", "M", "H", "0604", "test@test.com"));
	}
}
