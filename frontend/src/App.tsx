import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import { getData } from "./services/employeeApi";
import { Employee } from "./services/EmployeeResponse";

const App = () => {
    // (async (): Promise<void> => {
    //     const data = await getData();
    //     console.log(data);
    // })();

    const [data, setData] = useState<Employee[]>([]);

    const getEmployeesData = async (): Promise<void> => {
        const result = await getData();
        if (Array.isArray(result)) {
            setData(result);
        } else {
            // handle error
            console.error(result.message);
        }
    };

    useEffect(() => {
        getEmployeesData();
    }, []);

    return (
        <div className={styles.App}>
            {/* <h1>Employee Creator</h1> */}

            <EmployeeForm />
        </div>
    );
};

export default App;
