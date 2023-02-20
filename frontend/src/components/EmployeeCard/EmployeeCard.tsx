import styles from "./EmployeeCard.module.scss";

import { Employee } from "src/services/EmployeeResponse";
import { getTenure } from "./../../validation/helper";

interface EmployeeCardProps {
    employee: Employee;
}

const handleDelete = () => {
    console.log("Handle delete clicked");
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
    const tenure = getTenure(employee.startDate, employee.endDate);
    return (
        <>
            {" "}
            <h3>
                {employee.firstName} {employee.lastName}
            </h3>
            <p>{`${employee.contractType} - ${tenure} years`}</p>
            <p>{employee.email}</p>
            <button
                onClick={handleDelete}
                className={styles.EmployeeCard__Btn_Dlt}>
                Remove
            </button>
        </>
    );
};

export default EmployeeCard;
