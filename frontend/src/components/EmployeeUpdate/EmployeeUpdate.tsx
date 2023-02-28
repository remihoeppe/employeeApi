import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    let navigate = useNavigate();
    const [updated, setUpdated] = useState(false);
    const { id } = useParams();

    const [employee, setEmployee] = useState<Employee>(
        defaultData as unknown as Employee,
    );

    const handleUpdate = (employeFormData: Employee) => {
        updateEmployee(employeFormData as UpdateEmployeeResponse, id);
        setUpdated(true);
    };

    const handleCancel = () => {
        navigate("/employees");
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
            <EmployeeForm
                employeeData={employee}
                onFormSubmit={handleUpdate}
                onFormCancel={handleCancel}
            />
            {updated ? (
                <h3>Employee with ID {`${id}`} has been updated</h3>
            ) : (
                ""
            )}
        </>
    );
};

export default EmployeeUpdate;
