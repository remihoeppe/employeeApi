package com.employeeCreator.app.employee;

import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/")
    public List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    @PostMapping("/")
    public ResponseEntity<Employee> registerNewEmployee(
            @Valid @RequestBody EmployeeDTO employeeData)
    {
        Employee newEmployee = this.employeeService.addNewEmployee(employeeData);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

//    public void registerNewEmployee(@RequestBody  Employee employee) {
//        employeeService.addNewEmployee(employee);
//    }

    @PutMapping(path = "{employeeId}")
    // DO NOT THROW 404
    // IF
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Long employeeId, @RequestBody EmployeeDTO employeeData)
    {
        Employee employee =
                this.employeeService.updateEmployeeDetails(employeeId,
                employeeData);

        if(employee == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employee, HttpStatus.NO_CONTENT);
    }


    @DeleteMapping(path = "{employeeId}")
    public void deleteEmployee(@PathVariable("employeeId") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
    }

}
