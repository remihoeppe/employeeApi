package com.employeeCreator.app.employee;

import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    // Implementing Logging Strategy using SLF4J (Simple Logging Facade for Java)
    Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/")
    public List<Employee> getEmployees() {
        logger.info("All employees have been fetched from the database.");
        return employeeService.getEmployees();
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long employeeId) {
        try {
            Employee employee = employeeService.getEmployeeById(employeeId);
            logger.info(String.format("Employee with [ID] %s was fetched successfully.", employeeId));
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } catch (NoSuchElementException error) {
            logger.error(String.format("Employee with ID [%s] does not exist", employeeId));
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public ResponseEntity<Employee> registerNewEmployee(
            @Valid @RequestBody EmployeeDTO employeeData) {
        try {
            Employee newEmployee = this.employeeService.addNewEmployee(employeeData);
            logger.info(("" + newEmployee.getId()));
            logger.info(String.format("New employee with ID [%s], has been created successfully.",
                    newEmployee.getId()));
            return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
        } catch (IllegalStateException error) {
            logger.error(String.format("An employee with the email [%s], already exists", employeeData.getEmail()));
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{employeeId}")
    // DO NOT THROW 404
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Long employeeId, @RequestBody EmployeeDTO employeeData)
    {
        try {
            Employee employee = this.employeeService.updateEmployeeDetails(employeeId, employeeData);
            logger.info(String.format("Employee with ID [%s] has been saved (created if not already in DB)",
                    employee.getId()));
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } catch (IllegalStateException error){
            logger.error(String.format("An employee with the email [%s], already exists", employeeData.getEmail()));
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping(path = "{employeeId}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable("employeeId") Long employeeId) {
        try {
            employeeService.deleteEmployee(employeeId);
            logger.info(String.format("Employee with ID [%s] has been succesfully archived.", employeeId));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalStateException error) {
            logger.error(String.format("Employee with ID [%s] does not exist", employeeId));
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
