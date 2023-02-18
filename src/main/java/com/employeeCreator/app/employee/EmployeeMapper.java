package com.employeeCreator.app.employee;

import java.time.LocalDate;
import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface EmployeeMapper {

    @Mapping(source = "firstName", target = "firstName")
    @Mapping(source = "middleName", target = "middleName")
    @Mapping(source = "lastName", target = "lastName")
    @Mapping(source = "mobileNumber", target = "mobileNumber")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "address", target = "address")
    @Mapping(source = "startDate", target = "startDate")
    @Mapping(source = "contractType", target = "contractType")
    @Mapping(source = "timeBase", target = "timeBase")
    @Mapping(source = "weeklyHours", target = "weeklyHours")
//    @Mapping(source = "", target = "")


    Employee employeeDtoToEmployee(EmployeeDTO employeeData);

}
