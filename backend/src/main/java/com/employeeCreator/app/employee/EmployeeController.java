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
// Default Vite Server Port TODO -> Will need to be changed once Frontend has
//  been deployed to AWS
@CrossOrigin(origins = "http://127.0.0.1:5173/")
public class EmployeeController {
    private final EmployeeService employeeService;

    // Implementing Logging Strategy using SLF4J (Simple Logging Facade for Java)
    Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Employee>> getEmployees() {
        logger.info("All employees have been fetched from the database.");
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity getEmployeeById(@PathVariable Long employeeId) {
        try {
            Employee employee = employeeService.getEmployeeById(employeeId);
            logger.info(String.format("Employee with [ID] %s was fetched successfully.", employeeId));
            return ResponseEntity.status(HttpStatus.OK).body(employee);
        } catch (NoSuchElementException error) {
            String errorMessage = String.format(String.format("Employee with ID [%s] does not exist", employeeId));
            logger.error(errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }

    @PostMapping("/")
    public ResponseEntity registerNewEmployee(
            @Valid @RequestBody EmployeeDTO employeeData) {
        try {
            Employee newEmployee = this.employeeService.addNewEmployee(employeeData);
            logger.info(("" + newEmployee.getId()));
            logger.info(String.format("New employee with ID [%s], has been created successfully.",
                    newEmployee.getId()));
            return ResponseEntity.status(HttpStatus.CREATED).body(newEmployee);
        } catch (IllegalStateException error) {
            String errorMessage = String.format("An employee with the email [%s], already exists",
                    employeeData.getEmail());
            logger.error(errorMessage);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173/")
    @PutMapping("/{employeeId}")

    // DO NOT THROW 404
    public ResponseEntity updateEmployee(
            @PathVariable Long employeeId, @RequestBody EmployeeDTO employeeData)
    {
        try {
            Employee employee = this.employeeService.updateEmployeeDetails(employeeId, employeeData);
            logger.info(String.format("Employee with ID [%s] has been saved (created if not already in DB)",
                    employee.getId()));
            return ResponseEntity.status(HttpStatus.OK).body(employee);
        } catch (IllegalStateException error){
            String errorMessage = String.format("An employee with the email [%s], already exists",
                    employeeData.getEmail());
            logger.error(errorMessage);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
    }


    @DeleteMapping(path = "{employeeId}")
    public ResponseEntity deleteEmployee(@PathVariable("employeeId") Long employeeId) {
        try {
            employeeService.deleteEmployee(employeeId);
            String message = String.format("Employee with ID [%s] has been successfully archived.", employeeId);
            logger.info(message);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(message);
        } catch (IllegalStateException error) {
            String errorMessage = String.format("Employee with ID [%s] does not exist", employeeId);
            logger.error(errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }

}
