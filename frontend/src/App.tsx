import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Employee } from "./services/EmployeeResponse";
import { getAllEmployees } from "./services/apiServices";
import EmployeesList from "./components/EmployeesList/EmployeesList";

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Employee Creator</h1>} />
                    <Route path="/employees" element={<EmployeesList />} />
                    <Route
                        path="/employees/newEmployee"
                        element={<EmployeeForm />}
                    />
                    <Route path="/employees/:id" element={<EmployeeForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
