import http from "./http-common";
import axios from "axios";
import {
    CreateEmployeeResponse,
    Employee,
    GetEmployeesResponse,
    ArchiveEmployeResponse,
    UpdateEmployeeResponse,
} from "./EmployeeResponse";

export async function getEmployeeById(employeeId: any) {
    try {
        const { data, status } = await http.get<Employee>(
            `/employee/${employeeId}`,
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(
                "Error Message -> When trying to getAllEmployees: ",
                error.message,
            );
            return error.message;
        } else {
            console.log(
                "Unexpected Error -> When trying to getAllEmployees: ",
                error,
            );
            return "An unexpected error occurred'";
        }
    }
}

export async function archiveEmployee(employeeId: string) {
    try {
        const { data, status } = await http.delete<ArchiveEmployeResponse>(
            `/employee/${employeeId}`,
        );

        console.log("Response is: ", data);
        console.log("Response Status is: ", status);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(
                "Error Message -> When trying to getAllEmployees: ",
                error.message,
            );
            return error.message;
        } else {
            console.log(
                "Unexpected Error -> When trying to getAllEmployees: ",
                error,
            );
            return "An unexpected error occurred'";
        }
    }
}

export async function getAllEmployees() {
    try {
        const { data, status } = await http.get<Array<GetEmployeesResponse>>(
            "/employee/",
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(
                "Error Message -> When trying to getAllEmployees: ",
                error.message,
            );
            return error.message;
        } else {
            console.log(
                "Unexpected Error -> When trying to getAllEmployees: ",
                error,
            );
            return "An unexpected error occurred'";
        }
    }
}

export async function createEmployee(employeeData: CreateEmployeeResponse) {
    try {
        const { data, status } = await http.post<CreateEmployeeResponse>(
            "/employee",
            employeeData,
        );
        console.log(`Request Successful, Status: ${status}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(
                "Error Message -> When trying to getAllEmployees: ",
                error.message,
            );
            return error.message;
        } else {
            console.log(
                "Unexpected Error -> When trying to getAllEmployees: ",
                error,
            );
            return "An unexpected error occurred'";
        }
    }
}

export async function updateEmployee(employeeData: UpdateEmployeeResponse) {
    try {
        const { data, status } = await http.put<UpdateEmployeeResponse>(
            "/employee/",
            employeeData,
        );
        console.log(`Request Successful, Status: ${status}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(
                "Error Message -> When trying to getAllEmployees: ",
                error.message,
            );
            return error.message;
        } else {
            console.log(
                "Unexpected Error -> When trying to getAllEmployees: ",
                error,
            );
            return "An unexpected error occurred'";
        }
    }
}

export default getAllEmployees;
