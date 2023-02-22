import {
    fireEvent,
    getAllByText,
    getByRole,
    queryAllByRole,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { Mock, vi } from "vitest";
import EmployeeUpdate from "./EmployeeUpdate";
import { BrowserRouter } from "react-router-dom";

import employeesData from "../../services/api-services";

vi.mock("./../../services/apiServices");
const employeeDataMock = employeesData as Mock;

const fetchedEmployee = {
    id: 1,
    firstName: "John",
    middleName: "Bill",
    lastName: "H.",
    mobileNumber: "0411112222",
    email: "Bob@bill.usa",
    address: "Cali",
    startDate: "1879-03-17",
    endDate: "1889-06-30",
    contractType: "Permanent",
    timeBase: "Full time",
    weeklyHours: "38",
    deleted: false,
    timeWithCompany: 10,
};

describe("Testing EmployeeUpdate Component", async () => {
    beforeEach(async () => {
        await render(
            <BrowserRouter>
                <EmployeeUpdate />
            </BrowserRouter>,
        );
    });

    afterEach(async () => {
        await vi.clearAllMocks();
    });

    it("Should display an EmployeeForm", async () => {
        const employeeFormHeader = screen.getByRole("heading", {
            level: 1,
        });
        expect(employeeFormHeader).toHaveTextContent("Employee Details");
    });

    it("Should display an EmployeeForm with empty fields", async () => {
        const fields = screen.getAllByRole("textbox");
        fields.map((field) => {
            expect(field).toHaveTextContent("");
        });
    });

    it("", async () => {});
});
