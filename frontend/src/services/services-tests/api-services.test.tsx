import { beforeEach, describe, expect, test, vi } from "vitest";
import {
    getEmployeeById,
    archiveEmployee,
    getAllEmployees,
    createEmployee,
    updateEmployee,
} from "./../api-services";
import axios from "axios";

vi.mock("axios");

describe("EmployeeAPI Service", () => {
    describe("getAllEmployees", () => {
        test("makes a GET request to fetch users", async () => {
            const usersMock = [{ id: 1 }, { id: 2 }];

            const mockedAxios = vi.spyOn(axios, "get");
            mockedAxios.mockResolvedValue({ data: usersMock });

            const employees = await getAllEmployees();
            expect(axios.get).toHaveBeenCalledWith(
                "http://localhost:8080/employees",
            );
            mockedAxios.mockRestore();
        });
    });
});
