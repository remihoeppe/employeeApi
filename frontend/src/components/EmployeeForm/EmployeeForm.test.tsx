import {
    fireEvent,
    getAllByText,
    getByLabelText,
    getByRole,
    queryAllByRole,
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { Mock, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import EmployeeForm from "./OldEmployeeForm";
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

describe("Testing API call in EmployeForm component", async () => {
    it("Should display pre-filled fields if the URL contains an valid ID", async () => {
        employeeDataMock.mockReturnValue(fetchedEmployee);
        console.log(fetchedEmployee);
        console.log(fetchedEmployee.firstName);
        const { getByText, getByLabelText } = render(
            <BrowserRouter>
                <EmployeeForm />
            </BrowserRouter>,
        );
        await waitFor(async () => {
            expect(
                screen.getByRole("textbox", { name: "First Name" }),
            ).toHaveTextContent("John");
        });
    });
});

describe("Testing the EmployeeForm component", async () => {
    beforeEach(async () => {
        await render(
            <BrowserRouter>
                <EmployeeForm />
            </BrowserRouter>,
        );
    });

    afterEach(async () => {
        await vi.clearAllMocks();
    });

    it("Should reset the First Name when the user clears the input", async () => {
        const user = userEvent.setup();
        const input = screen.getByRole("textbox", { name: "First Name" });
        await user.clear(input);
        expect(input).toHaveTextContent("");
    });

    it("Should call register() EVERY time any radio input is clicked", async () => {
        const contract = screen.getByRole("radio", { name: "Contract" });
        fireEvent.click(contract);
        const fullTime = screen.getByRole("radio", { name: "Full-time" });
        fireEvent.click(fullTime);
        expect(contract).toBeChecked();
        expect(fullTime).toBeChecked();

        const perm = screen.getByRole("radio", { name: "Permanent" });
        fireEvent.click(perm);
        const partTime = screen.getByRole("radio", { name: "Part-time" });
        fireEvent.click(partTime);
        expect(perm).toBeChecked();
        expect(partTime).toBeChecked();
    });

    it("Should have a Save and a Cancel button", async () => {
        expect(screen.getByText("Save")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
    });

    it("Should display all the right fields", async () => {
        const fieldNames = [
            "First Name",
            "Middle Names (if applicable)",
            "Last Name",
            "Mobile Number",
            "Email Address",
            "Residential Address",
            "Start Date",
            "End Date",
            "Hours per week",
        ];

        fieldNames.map((fieldName) => {
            expect(
                screen.getByRole("textbox", {
                    name: fieldName,
                }),
            ).toBeInTheDocument();
        });

        expect(
            screen.getByRole("checkbox", {
                name: "On Going",
            }),
        ).toBeInTheDocument();
    });

    it("Should trigger a call of the register() method every time the user modifies one of the fields", async () => {});

    it("Should trigger a GET request when the user clicks on SAVE", async () => {});
});
