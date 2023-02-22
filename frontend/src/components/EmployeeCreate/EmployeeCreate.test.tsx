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
import EmployeeCreate from "./EmployeeCreate";
import { BrowserRouter } from "react-router-dom";

import employeesData from "../../services/api-services";

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
