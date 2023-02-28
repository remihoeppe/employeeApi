import { createEmployee } from "../../services/api-services";
import { Employee } from "src/services/employee-response";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useNavigate } from "react-router-dom";

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
    let navigate = useNavigate();

    const handleCreate = (employeFormData: Employee) => {
        createEmployee(employeFormData as Employee);
        navigate("/employees");
    };

    const handleCancel = () => {
        navigate("/employees");
    };

    return (
        <>
            <EmployeeForm
                employeeData={defaultData as Employee}
                onFormSubmit={handleCreate}
                onFormCancel={handleCancel}
            />
        </>
    );
};

export default EmployeeCreate;
