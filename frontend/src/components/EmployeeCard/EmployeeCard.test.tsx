import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import EmployeeCard from "./EmployeeCard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { getTenure } from "src/validation/helper";

const mockProps: any = {
    employee: {
        id: 1,
        firstName: "Bob",
        middleName: "M",
        lastName: "Wilde",
        mobileNumber: "0412223334",
        email: "bobm@wilde.com",
        address: "usa@country.com",
        startDate: "2000-01-01",
        endDate: "2020-06-15",
        contractType: "Contract",
        timeBase: "Part time",
        weeklyHours: "30",
        deleted: false,
    },
    onDelete: vi.fn(() => {}),
};

describe("Testing EmployeeCard", () => {
    beforeEach(async () => {
        await render(
            <BrowserRouter>
                <EmployeeCard
                    employee={mockProps.employee}
                    onDelete={mockProps.onDelete}
                />
            </BrowserRouter>,
        );
    });

    afterEach(async () => {
        await vi.restoreAllMocks();
    });

    it("Should call onDelete function when user clicks on Remove", async () => {
        const user = userEvent.setup();
        const removeBtn = screen.getByTestId("removeBtn");
        await user.click(removeBtn);
        expect(mockProps.onDelete).toHaveBeenCalled();
    });

    it("Should display the right information for the employee", async () => {
        const tenure = getTenure(
            mockProps.employee.startDate,
            mockProps.employee.endDate,
        );

        const fullName = screen.getByRole("heading", { level: 3 });
        expect(fullName).toHaveTextContent(
            `${mockProps.employee.firstName} ${mockProps.employee.lastName}`,
        );

        const contract = screen.getByTestId("contract");
        expect(contract).toHaveTextContent(
            `${mockProps.employee.contractType} - ${tenure} years`,
        );

        const email = screen.getByTestId("email");
        expect(email).toHaveTextContent(mockProps.employee.email);
    });

    // TODO -> Add test to check functionality of NavLink (redirecting to Form page)
    it("Should redirect to the pre-filled form page when the use click on the Edit NavLink", () => {});
});
