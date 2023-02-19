import { Employee } from "./EmployeeResponse";
import { CustomError, ErrorMessage } from "./error";

export const getData = async (): Promise<Array<Employee> | CustomError> => {
    try {
        const response = await fetch("http://localhost:8080/api/v1/employee/");

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return {
            message: ErrorMessage.servorErrorMessage,
            resolution: "rejected",
        };
    }
};
