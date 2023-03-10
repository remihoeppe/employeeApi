package com.employeeCreator.app.employee;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Transient;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EmployeeDTO {
    @NotBlank
    private String firstName;
    // Can be null for employee with no middle names
    private String middleName;

    @NotBlank
    private String lastName;

    @NotBlank
    @Min(10)
    // To conform with AUS mobile phone number format, TODO: Extra
    // validation will be required to check for international code
    private String mobileNumber;

    @NotBlank
    @Column(unique = true)
    private String email;

    @NotBlank
    private String address;

    @Past
    private LocalDate startDate;

    // Can be null if on-going employment
    private LocalDate endDate;

    @NotBlank
    private String contractType;

    @NotBlank
    private String timeBase;

    @NotBlank
    private String weeklyHours;

    @Transient
    private Integer timeWithCompany;

    public EmployeeDTO(
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
}
