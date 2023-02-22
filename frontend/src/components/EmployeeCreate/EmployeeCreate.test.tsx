import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import EmployeeCreate from "./EmployeeCreate";
import { BrowserRouter } from "react-router-dom";

describe("", async () => {
    beforeEach(async () => {
        await render(
            <BrowserRouter>
                <EmployeeCreate />
            </BrowserRouter>,
        );
    });

    afterEach(async () => {
        await vi.clearAllMocks();
    });

    it("Should display an EmployeeForm", async () => {
        const employeeFormHeader = screen.getByRole("heading", { level: 1 });

        expect(employeeFormHeader).toHaveTextContent("Employee Details");
    });

    it("Should display an EmployeeForm with empty fields", async () => {
        const fields = screen.getAllByRole("textbox");
        fields.map((field) => {
            expect(field).toHaveTextContent("");
        });
    });
});
