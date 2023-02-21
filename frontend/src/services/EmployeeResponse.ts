export interface Employee {
    id: String;
    firstName: String;
    middleName: String;
    lastName: String;
    mobileNumber: String;
    email: String;
    address: String;
    startDate: Date;
    endDate: Date;
    contractType: String;
    timeBase: String;
    weeklyHours: String;
    deleted: Boolean;
}

export type GetEmployeesResponse = {
    data: Employee[];
};

export type CreateEmployeeResponse = {
    firstName: String;
    middleName: String;
    lastName: String;
    mobileNumber: String;
    email: String;
    address: String;
    startDate: Date;
    endDate: Date;
    contractType: String;
    timeBase: String;
    weeklyHours: String;
};

export type UpdateEmployeeResponse = {
    id: string;
    firstName: String;
    middleName: String;
    lastName: String;
    mobileNumber: String;
    email: String;
    address: String;
    startDate: Date;
    endDate: Date;
    contractType: String;
    timeBase: String;
    weeklyHours: String;
    deleted: Boolean;
};

export type ArchiveEmployeResponse = "";
