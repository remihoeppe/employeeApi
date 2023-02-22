import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "./../../services/apiServices";
import {
    Employee,
    UpdateEmployeeResponse,
} from "src/services/EmployeeResponse";
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

const EmployeeUpdate = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState<Employee>(
        defaultData as unknown as Employee,
    );

    const handleUpdate = () => {
        console.log("UpdateFunction was called");
        updateEmployee(employee as UpdateEmployeeResponse);
    };

    const getEmployeeDefaultData = async (id: string | undefined) => {
        const data = id ? await getEmployeeById(id) : defaultData;
        console.log("Getting employeeByID:", data);
        setEmployee(data as Employee);
    };

    useEffect(() => {
        getEmployeeDefaultData(id);
        setEmployee(employee as Employee);
    }, [id]);

    return (
        <>
            <EmployeeForm employeeData={employee} onFormSubmit={handleUpdate} />
        </>
    );
};

export default EmployeeUpdate;
