import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <NavLink className={styles.NavBar__Link} to={"/employees/"}>
                Employee's List
            </NavLink>
            <NavLink
                className={styles.NavBar__Link}
                to={"/employees/newEmployee"}>
                New Employee Form
            </NavLink>
        </div>
    );
};

export default NavBar;
