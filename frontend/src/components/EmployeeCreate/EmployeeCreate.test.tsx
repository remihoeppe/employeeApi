import { render, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import EmployeeCreate from "./EmployeeCreate";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import userEvent from "@testing-library/user-event";

describe("", async () => {
    // beforeEach(async () => {
    //     await render(
    //         <BrowserRouter>
    //             <EmployeeCreate />
    //         </BrowserRouter>,
    //     );
    // });

    // afterEach(async () => {
    //     await vi.restoreAllMocks();
    // });

    // it("Should display an EmployeeForm", async () => {
    //     const employeeFormHeader = screen.getByRole("heading", { level: 1 });
    //     expect(employeeFormHeader).toHaveTextContent("Employee Details");
    // });

    // it("Should display an EmployeeForm with empty fields", async () => {
    //     const fields = screen.getAllByRole("textbox");
    //     fields.map((field) => {
    //         expect(field).toHaveTextContent("");
    //     });
    // });

    it("Should make an POST request with employee data when SAVA button is clicked", async () => {
        const newEmployeeData = {
            firstName: "John",
            middleName: "Bill",
            lastName: "Hopp",
            mobileNumber: "0411112222",
            email: "Bob@bill.usa",
            address: "Cali",
            startDate: "1879-03-17",
            endDate: "1889-06-30",
            weeklyHours: "38",
            contractType: "Permanent",
            timeBase: "Full time",
        };
        const alertMock = vi
            .spyOn(window, "alert")
            .mockImplementation(() => {});
        vi.spyOn(axios, "post").mockResolvedValue({ data: newEmployeeData });

        await render(
            <BrowserRouter>
                <EmployeeCreate />
            </BrowserRouter>,
        );

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

        const inputs = fieldNames.map(async (fieldName) => {
            return await screen.getByRole("textbox", {
                name: fieldName,
            });
        });

        const contractType = screen.getByRole("checkbox", {
            name: "On Going",
        });

        Object.values(newEmployeeData).map(async (value) => {
            if (value === "Permanent") return;
            if (value === "Full Time") return;
            inputs.map(async (input) => {
                await userEvent.type(await input, value);
            });
        });

        const saveBtn = screen.getByText("Save");
        await userEvent.click(saveBtn);

        console.log(saveBtn);

        expect(alertMock).toBeCalled();
        expect(alertMock).toBeCalledWith(
            `New employee ${newEmployeeData.firstName} ${newEmployeeData.lastName} successfully added to database`,
        );
    });
});
