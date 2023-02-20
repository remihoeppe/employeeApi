import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";

import { Employee } from "./services/EmployeeResponse";
import { getAllEmployees } from "./services/apiServices";
import EmployeesList from "./components/EmployeesList/EmployeesList";

const App = () => {
    const [data, setData] = useState<Employee[]>([]);

    const getEmployeesData = async (): Promise<void> => {
        const data = await getAllEmployees();
        setData(data);
    };

    useEffect(() => {
        getEmployeesData();
    }, []);

    return (
        <div className={styles.App}>
            {/* <h1>Employee Creator</h1> */}
            <EmployeesList employeesData={data} />
            {/* <EmployeeForm /> */}
        </div>
    );
};

export default App;
