import http from "./http-common";
import axios from "axios";
import {
    CreateEmployeeResponse,
    Employee,
    GetEmployeesResponse,
    ArchiveEmployeResponse,
    UpdateEmployeeResponse,
} from "./employee-response";

export async function getEmployeeById(employeeId: any) {
    try {
        const { data, status } = await http.get<Employee>(
            `/employees/${employeeId}`,
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
            `/employees/${employeeId}`,
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
            "/employees",
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
            "/employees",
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

export async function updateEmployee(
    employeeData: UpdateEmployeeResponse,
    employeeId: string,
) {
    try {
        const { data, status } = await http.put<UpdateEmployeeResponse>(
            `/employees/${employeeId}`,
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
