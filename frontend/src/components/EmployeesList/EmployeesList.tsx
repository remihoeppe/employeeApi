import { archiveEmployee, getAllEmployees } from "./../../services/apiServices";
import { Employee } from "src/services/EmployeeResponse";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Separator from "../Separator/Separator";

import styles from "./EmployeesList.module.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// interface EmployeesListProps {
//     employeesData: Employee[];
// }

const EmployeesList = () => {
    // Change type for this state
    const [data, setData] = useState<any>([]);
    const [archiving, setArchiving] = useState(false);

    const handleAddEmployee = () => {
        console.log("handleAddEmployee was clicked");
    };

    const getEmployeesData = async (): Promise<void> => {
        const data = await getAllEmployees();
        console.log(data);
        setData(data);
    };

    const handleDelete = (employeeId: string) => {
        archiveEmployee(employeeId);
        setArchiving(true);
    };

    useEffect(() => {
        getEmployeesData();
    }, []);

    useEffect(() => {
        getEmployeesData();
        setArchiving(false);
    }, [archiving]);

    return (
        <>
            <h2>Employees' List</h2>
            <div className={styles.EmployeesList__Header}>
                <p>
                    Please click on 'Edit' to find more details about each
                    employees
                </p>
                <NavLink
                    className={styles.EmployeesList__Header_AddBtn}
                    to={`/employees/newEmployee`}>
                    Add Employee
                </NavLink>
            </div>

            <Separator
                widthProp={"100%"}
                heightProp={"1px"}
                backgroudColorProp={"grey"}
            />
            {data.map((employee: Employee, index: any) => {
                return (
                    <EmployeeCard
                        key={index}
                        employee={employee}
                        onDelete={handleDelete}
                    />
                );
            })}
        </>
    );
};

export default EmployeesList;
