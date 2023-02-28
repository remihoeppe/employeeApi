import styles from "./EmployeeForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Employee } from "./../../services/employee-response";
import { employeeFormSchema } from "../../validation/employee-form-schema";
import { useEffect, useState } from "react";

interface EmployeeFormProps {
    employeeData: Employee;
    onFormSubmit: any;
    onFormCancel: any;
}

const EmployeeForm = ({
    employeeData,
    onFormSubmit,
    onFormCancel,
}: EmployeeFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Employee>({
        resolver: yupResolver(employeeFormSchema),
        defaultValues: employeeData,
    });

    useEffect(() => {
        reset(employeeData);
    }, [employeeData]);

    const [isOnGoing, setIsOnGoing] = useState(false);

    const onSubmit: SubmitHandler<Employee> = (data) => {
        console.log(data);
        onFormSubmit(data);
    };

    const handleOnGoingClick = () => {
        setIsOnGoing(!isOnGoing);
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>
            <h1>Employee Details</h1>

            <div className={styles.EmployeeForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Personal Information</h2>

                    {/* First Name */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="firstName"
                            className={styles.EmployeeForm__Input_Label}>
                            First Name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            {...register("firstName")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.firstName?.message}
                        </div>
                    </div>

                    {/* Middle Names */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="middleName"
                            className={styles.EmployeeForm__Input_Label}>
                            Middle Names (if applicable)
                        </label>
                        <input
                            id="middleName"
                            type="text"
                            {...register("middleName")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.middleName?.message}
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="lastName"
                            className={styles.EmployeeForm__Input_Label}>
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            {...register("lastName")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.lastName?.message}
                        </div>
                    </div>

                    <h2>Contact Details</h2>
                    {/* Mobile Number */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="mobileNumber"
                            className={styles.EmployeeForm__Input_Label}>
                            Mobile Number
                        </label>
                        <p className={styles.EmployeeForm__Input_Helper}>
                            Must be an Australian number
                        </p>
                        <input
                            id="mobileNumber"
                            type="text"
                            {...register("mobileNumber")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.mobileNumber?.message}
                        </div>
                    </div>

                    {/* Email */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="email"
                            className={styles.EmployeeForm__Input_Label}>
                            Email Address
                        </label>

                        <input id="email" type="text" {...register("email")} />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.email?.message}
                        </div>
                    </div>

                    {/* Residential Address */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="address"
                            className={styles.EmployeeForm__Input_Label}>
                            Residential Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="123 Example St, Sydney NSW 2000"
                            {...register("address")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.address?.message}
                        </div>
                    </div>

                    <h2>Employee Status</h2>
                    {/* Contract Type */}
                    <div className={styles.EmployeeForm__Input}>
                        <p>What contract type is this employee on?</p>
                        <div className={styles.EmployeeForm__Input_Radio}>
                            <div>
                                <input
                                    id="permanent"
                                    type="radio"
                                    value="Permanent"
                                    {...register("contractType")}
                                />
                                <label
                                    htmlFor="permanent"
                                    className={
                                        styles.EmployeeForm__Input_Label
                                    }>
                                    Permanent
                                </label>
                            </div>
                            <div>
                                <input
                                    id="contract"
                                    type="radio"
                                    value="Contract"
                                    {...register("contractType")}
                                />
                                <label
                                    htmlFor="contract"
                                    className={
                                        styles.EmployeeForm__Input_Label
                                    }>
                                    Contract
                                </label>
                            </div>
                        </div>

                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.contractType?.message}
                        </div>
                    </div>

                    {/* Dates */}

                    {/* <h3>Start Date</h3> */}
                    {/* TODO -> Replace with DatePicker component  */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="startDate"
                            className={styles.EmployeeForm__Input_Label}>
                            Start Date
                        </label>
                        <input
                            id="startDate"
                            type="text"
                            placeholder="YYYY-MM-DD"
                            {...register("startDate")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.startDate?.message}
                        </div>
                    </div>

                    {/* <h3>Finish Date</h3> */}
                    {/* TODO -> Replace with DatePicker component  */}

                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="endDate"
                            className={styles.EmployeeForm__Input_Label}>
                            End Date
                        </label>
                        <input
                            id="endDate"
                            type="text"
                            {...register("endDate")}
                            placeholder="YYYY-MM-DD"
                            disabled={isOnGoing ? true : false}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.endDate?.message}
                        </div>
                    </div>

                    <div className={styles.EmployeeForm__Input}>
                        <div className={styles.EmployeeForm__Input_Radio}>
                            <div>
                                <input
                                    id="onGoing"
                                    type="checkbox"
                                    onChange={handleOnGoingClick}
                                />
                                <label
                                    htmlFor="onGoing"
                                    className={
                                        styles.EmployeeForm__Input_Label
                                    }>
                                    On Going
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Time Basis */}
                    <div className={styles.EmployeeForm__Input}>
                        <p>Is this on a full-time or part-time basis?</p>
                        <div className={styles.EmployeeForm__Input_Radio}>
                            <div>
                                <input
                                    id="fullTime"
                                    type="radio"
                                    value="Full time"
                                    {...register("timeBase")}
                                />
                                <label
                                    htmlFor="fullTime"
                                    className={
                                        styles.EmployeeForm__Input_Label
                                    }>
                                    Full-time
                                </label>
                            </div>
                            <div>
                                <input
                                    id="partTime"
                                    type="radio"
                                    value="Part time"
                                    {...register("timeBase")}
                                />
                                <label
                                    htmlFor="partTime"
                                    className={
                                        styles.EmployeeForm__Input_Label
                                    }>
                                    Part-time
                                </label>
                            </div>

                            <div
                                className={
                                    styles.EmployeeForm__InvalidFeedback
                                }>
                                {errors.timeBase?.message}
                            </div>
                        </div>
                    </div>

                    {/* Weekly Hours */}
                    <div className={styles.EmployeeForm__Input}>
                        <label
                            htmlFor="weeklyHours"
                            className={styles.EmployeeForm__Input_Label}>
                            Hours per week
                        </label>
                        <input
                            id="weeklyHours"
                            className={styles.EmployeeForm__Input_HoursInput}
                            type="text"
                            {...register("weeklyHours")}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.weeklyHours?.message}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className={styles.EmployeeForm__Btns}>
                        <button
                            type="submit"
                            className={styles.EmployeeForm__Btns_Btn}>
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => onFormCancel()}
                            className={styles.EmployeeForm__Btns_BtnCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EmployeeForm;
