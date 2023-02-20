import { Employee } from "src/services/EmployeeResponse";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

import styles from "./EmployeesList.module.scss";

interface EmployeesListProps {
    employeesData: Employee[];
}

const EmployeesList = ({ employeesData }: EmployeesListProps) => {
    const handleAddEmployee = () => {
        console.log("handleAddEmployee was clicked");
    };

    return (
        <>
            <h2>EmployeesList</h2>;
            <p>
                Please click on 'Edit' to find more details about each employees
            </p>
            <button onClick={handleAddEmployee}>Add Employee</button>
            {employeesData.map((employee: Employee, index) => {
                return <EmployeeCard key={index} employee={employee} />;
            })}
        </>
    );
};

export default EmployeesList;
