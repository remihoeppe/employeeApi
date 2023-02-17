package com.employeeCreator.demo.employee;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class Employee {
    private Long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String mobileNumber;
    private String email;

    public Employee(String firstName, String middleName, String lastName, String mobileNumber, String email) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    public Employee(Long id, String firstName, String middleName, String lastName, String mobileNumber, String email) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    @Override
    public String toString() {
        return "employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
