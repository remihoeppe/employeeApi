export interface Employee {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    address: string;
    startDate: string;
    endDate: string;
    contractType: string;
    timeBase: string;
    weeklyHours: string;
    deleted: Boolean;
}

export type GetEmployeesResponse = {
    data: Employee[];
};

export type CreateEmployeeResponse = {
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    address: string;
    startDate: string;
    endDate: string;
    contractType: string;
    timeBase: string;
    weeklyHours: string;
};

export type UpdateEmployeeResponse = {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    address: string;
    startDate: string;
    endDate: string;
    contractType: string;
    timeBase: string;
    weeklyHours: string;
    deleted: Boolean;
};

export type ArchiveEmployeResponse = "";
