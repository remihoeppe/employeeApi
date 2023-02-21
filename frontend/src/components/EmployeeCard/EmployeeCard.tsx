import styles from "./EmployeeCard.module.scss";
import Separator from "../Separator/Separator";
import { Employee } from "src/services/EmployeeResponse";
import { getTenure } from "./../../validation/helper";
import { NavLink } from "react-router-dom";

interface EmployeeCardProps {
    employee: Employee;
    onDelete: any;
}

const EmployeeCard = ({ employee, onDelete }: EmployeeCardProps) => {
    const handleOnDelete = () => {
        onDelete(employee.id);
    };

    const tenure = getTenure(employee.startDate, employee.endDate);
    return (
        <>
            {/* <Separator /> */}
            <div className={styles.EmployeeCard}>
                <div>
                    <h3>
                        {employee.firstName} {employee.lastName}
                    </h3>
                    <p>{`${employee.contractType} - ${tenure} years`}</p>
                    <p>{employee.email}</p>
                </div>
                <div className={styles.EmployeeCard__Btns}>
                    <NavLink
                        className={styles.EmployeeCard__Btns_Link}
                        to={`/employees/${employee.id}`}>
                        Edit
                    </NavLink>
                    <Separator
                        widthProp={"1px"}
                        heightProp={"18px"}
                        backgroudColorProp={"grey"}
                    />
                    <div
                        data-testid="removeBtn"
                        onClick={handleOnDelete}
                        className={styles.EmployeeCard__Btns_Dlt}>
                        Remove
                    </div>
                </div>
            </div>
            <Separator
                widthProp={"100%"}
                heightProp={"1px"}
                backgroudColorProp={"grey"}
            />
        </>
    );
};

export default EmployeeCard;
