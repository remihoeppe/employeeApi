package com.employeeCreator.app.employee;

import java.time.LocalDate;
import java.time.Period;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Employee {
    @Id
    @SequenceGenerator(name = "employee_sequence", sequenceName = "employee_sequence", allocationSize = 1)

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employee_sequence")

    private Long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String mobileNumber;
    private String email;
    private String address;
    private LocalDate startDate;
    private LocalDate endDate;
    private String contractType;
    private String timeBase;
    private String weeklyHours;

    @Transient
    private Integer timeWithCompany;

    public Employee(
            String firstName,
            String middleName,
            String lastName,
            String mobileNumber,
            String email,
            String address,
            LocalDate startDate,
            LocalDate endDate,
            String contractType,
            String timeBase,
            String weeklyHours) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
        this.contractType = contractType;
        this.timeBase = timeBase;
        this.weeklyHours = weeklyHours;

    }

    public Employee(
            Long id,
            String firstName,
            String middleName,
            String lastName,
            String mobileNumber,
            String email,
            String address,
            LocalDate startDate,
            LocalDate endDate,
            String contractType,
            String timeBase,
            String weeklyHours) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
        this.contractType = contractType;
        this.timeBase = timeBase;
        this.weeklyHours = weeklyHours;
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

    // Allow to get a Tenure duration based on endDate if exists or on going time
    // with the company if employee is still under contract
    public Integer getTimeWithCompany() {
        if (getEndDate() != null) {
            return Period.between(startDate, endDate).getYears();
        } else {
            return Period.between(startDate, LocalDate.now()).getYears();
        }
    }
}
