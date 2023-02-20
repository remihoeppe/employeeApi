import styles from "./App.module.scss";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import EmployeesList from "./components/EmployeesList/EmployeesList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <NavBar />
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
