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
import EmployeeForm from "./EmployeeForm";
import { BrowserRouter } from "react-router-dom";

import employeesData from "../../services/api-services";

vi.mock("./../../services/apiServices");
const employeeDataMock = employeesData as Mock;

const mockProps: any = {
    fetchedEmployee: {
        id: 1,
        firstName: "John",
        middleName: "Bill",
        lastName: "Hope",
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
    mockSubmit: vi.fn((newEmployeeData) => {
        return Promise.resolve({ newEmployeeData });
    }),
};

describe("Testing API call in EmployeForm component", async () => {
    it("Should display pre-filled fields if the URL contains a valid ID", async () => {
        const { getByRole } = render(
            <BrowserRouter>
                <EmployeeForm
                    onFormSubmit={mockProps.mockSubmit}
                    employeeData={mockProps.fetchedEmployee}
                />
            </BrowserRouter>,
        );
        await waitFor(async () => {
            expect(
                getByRole("textbox", { name: "First Name" }),
            ).toHaveDisplayValue("John");
            expect(
                getByRole("textbox", { name: "Last Name" }),
            ).toHaveDisplayValue("Hope");
        });
    });
});

describe("Testing the EmployeeForm component", async () => {
    beforeEach(async () => {
        await render(
            <BrowserRouter>
                <EmployeeForm
                    onFormSubmit={mockProps.mockSubmit}
                    employeeData={mockProps.fetchedEmployee}
                />
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

    it("Should disable the enDate field when user clicks on onGoing checkbox", async () => {
        const onGoing = screen.getByRole("checkbox", { name: "On Going" });
        fireEvent.click(onGoing);
        expect(onGoing).toBeChecked();

        const endDate = screen.getByRole("textbox", { name: "End Date" });
        expect(endDate).toBeDisabled();
    });

    it("Should display an error message if a field has been input incorrectly", async () => {
        const firstNameInput = screen.getByRole("textbox", {
            name: "First Name",
        });
        expect(firstNameInput).toHaveDisplayValue("John");

        fireEvent.input(firstNameInput, { target: { value: "John999" } });
        expect(firstNameInput).toHaveDisplayValue("John999");
        const saveBtn = screen.getByText("Save");
        console.log(saveBtn);
        fireEvent.click(saveBtn);
        expect(screen).toHaveTextContent(
            "A name can only include letters from A to Z",
        );
    });

    it("Should trigger the onSubmit function when user clicks on Save", async () => {
        fireEvent.click(screen.getByText("Save"));
        expect(mockProps.mockSubmit).toBeCalled();
    });
});
