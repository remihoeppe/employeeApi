import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import EmployeeCard from "./EmployeeCard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

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
    onDelete: vi.fn((e: any) => e.target.value),
};

describe("Testing EmployeeCard", () => {
    beforeEach(async () => {
        await render(
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <EmployeeCard
                                employee={mockProps.employee}
                                onDelete={mockProps.onDelete}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>,
        );
    });

    afterEach(async () => {
        await vi.clearAllMocks();
    });

    it("Should call onDelete function when user clicks on Remove", async () => {
        const user = userEvent.setup();
        const removeBtn = screen.getByTestId("removeBtn");
        console.log(removeBtn);
    });
});
