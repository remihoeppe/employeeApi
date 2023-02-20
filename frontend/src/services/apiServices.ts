import http from "./http-common";
import axios from "axios";
import {
    CreateEmployeeResponse,
    Employee,
    GetEmployeesResponse,
} from "./EmployeeResponse";

export async function getEmployeeById(id: any) {
    return http.get<Array<Employee>>(`/employee/${id}`);
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
