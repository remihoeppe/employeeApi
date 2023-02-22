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
    const [employee, setEmployee] = useState<Employee>(defaultData as Employee);

    const handleCreate = () => {
        console.log("CreateFunction was called");
        createEmployee(employee as Employee);
    };

    return (
        <>
            <EmployeeForm employeeData={employee} onFormSubmit={handleCreate} />
        </>
    );
};

export default EmployeeCreate;
