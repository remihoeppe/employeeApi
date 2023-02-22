import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../services/api-services";
import {
    Employee,
    UpdateEmployeeResponse,
} from "src/services/employee-response";
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

    const handleUpdate = (employeFormData: Employee) => {
        updateEmployee(employeFormData as UpdateEmployeeResponse, id);
    };

    const getEmployeeDefaultData = async (id: string | undefined) => {
        const data = id ? await getEmployeeById(id) : defaultData;
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
