import React, { useState } from "react";
import { createEmployee } from "./../../services/apiServices";
import { Employee } from "src/services/EmployeeResponse";
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
