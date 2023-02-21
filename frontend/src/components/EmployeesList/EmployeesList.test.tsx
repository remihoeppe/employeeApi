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
import EmployeesList from "./EmployeesList";
import { BrowserRouter } from "react-router-dom";

import employeesData from "./../../services/apiServices";

vi.mock("./../../services/apiServices");
const employeeDataMock = employeesData as Mock;

const fetchedData = [
    {
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
    },
    {
        id: 2,
        firstName: "Will",
        middleName: "Wild",
        lastName: "H.",
        mobileNumber: "0411112222",
        email: "Will@bill.usa",
        address: "Cali",
        startDate: "2000-03-17",
        endDate: "2005-06-30",
        contractType: "Permanent",
        timeBase: "Full time",
        weeklyHours: "25",
        deleted: false,
        timeWithCompany: 5,
    },
];

describe("Testing EmployeesList Component", async () => {
    it("Renders the list of employees correctly", async () => {
        employeeDataMock.mockReturnValue(fetchedData);
        const { getByRole, getAllByTestId } = render(
            <BrowserRouter>
                <EmployeesList />
            </BrowserRouter>,
        );
        await waitFor(() => {
            expect(getByRole("heading", { level: 2 })).toBeInTheDocument();
            expect(getAllByTestId("employeeCard")).toHaveLength(2);
        });
    });

    it("Renders the correct information for the fechted employees", async () => {
        employeeDataMock.mockReturnValue(fetchedData);
        const { getByText } = render(
            <BrowserRouter>
                <EmployeesList />
            </BrowserRouter>,
        );
        await waitFor(() => {
            // Displays the right emails
            expect(getByText("Bob@bill.usa")).toBeInTheDocument();
            expect(getByText("Will@bill.usa")).toBeInTheDocument();
            // Displays the right names
            expect(getByText("John H.")).toBeInTheDocument();
            expect(getByText("Will H.")).toBeInTheDocument();
        });
    });

    // TODO -> Add test to check functionality of the NavLink (redirecting to the new employeForm)
    it("Should redirect to the blank form page when the use click on the NavLink", () => {});
});
