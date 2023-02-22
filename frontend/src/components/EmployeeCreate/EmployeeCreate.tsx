import React, { useState } from "react";
import { createEmployee } from "../../services/api-services";
import { Employee } from "src/services/employee-response";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const defaultData = {
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    startDate: "",
    endDate: "",
    contractType: "",
    timeBase: "",
    weeklyHours: "",
};

const EmployeeCreate = () => {
    const handleCreate = (employeFormData: Employee) => {
        createEmployee(employeFormData as Employee);
    };

    return (
        <>
            <EmployeeForm
                employeeData={defaultData as Employee}
                onFormSubmit={handleCreate}
            />
        </>
    );
};

export default EmployeeCreate;
