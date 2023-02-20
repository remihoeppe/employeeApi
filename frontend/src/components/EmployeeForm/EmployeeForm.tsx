import styles from "./EmployeeForm.module.scss";
import {
    useForm,
    SubmitHandler,
    FieldValues,
    FieldError,
    DeepMap,
} from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Employee } from "src/services/EmployeeResponse";
import { employeeFormSchema } from "./../../validation/employeeFormSchema";
import DatePicker from "../DatePicker/DatePicker";

type UserSubmitEmployeeForm = {
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

const EmployeeForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Employee>({ resolver: yupResolver(employeeFormSchema) });

    const onSubmit: SubmitHandler<Employee> = (data) => {
        console.log("buttonclicked");
        console.log(data);
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
                            className={`styles.EmployeeForm__Control ${
                                errors.firstName ? "_Invalid" : ""
                            }`}
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
                            className={`styles.EmployeeForm__Control ${
                                errors.middleName ? "_Invalid" : ""
                            }`}
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
                            Full Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            {...register("lastName")}
                            className={`styles.EmployeeForm__Control ${
                                errors.lastName ? "_Invalid" : ""
                            }`}
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
                            className={`styles.EmployeeForm__Control ${
                                errors.mobileNumber ? "_Invalid" : ""
                            }`}
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
                            Email address
                        </label>

                        <input
                            id="email"
                            type="text"
                            {...register("email")}
                            className={`styles.EmployeeForm__Control ${
                                errors.email ? "_Invalid" : ""
                            }`}
                        />
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
                            className={`styles.EmployeeForm__Control ${
                                errors.address ? "_Invalid" : ""
                            }`}
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
                                    value="permanent"
                                    {...register("contractType")}
                                    className={`form-check-input ${
                                        errors.contractType ? "_Invalid" : ""
                                    }`}
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
                                    value="contract"
                                    {...register("contractType")}
                                    className={`form-check-input ${
                                        errors.contractType ? "_Invalid" : ""
                                    }`}
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
                            {...register("startDate")}
                            className={`styles.EmployeeForm__Control ${
                                errors.startDate ? "_Invalid" : ""
                            }`}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.startDate?.message}
                        </div>
                    </div>

                    {/* <h3>Finish Date</h3> */}
                    {/* TODO -> Replace with DatePicker component  */}

                    <div className={styles.EmployeeForm__Input}>
                        <label>End Date</label>
                        <input
                            type="text"
                            {...register("endDate")}
                            className={`styles.EmployeeForm__Control ${
                                errors.endDate ? "_Invalid" : ""
                            }`}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.endDate?.message}
                        </div>
                    </div>

                    {/* <div className={styles.EmployeeForm__Input}>
                        <div className={styles.EmployeeForm__Input_Radio}>
                            <div>
                                <input
                                    id="onGoing"
                                    type="checkbox"
                                    {...register("endDate")}
                                    className={`form-check-input ${
                                        errors.endDate ? "_Invalid" : ""
                                    }`}
                                />
                                <label
                                    htmlFor="onGoing"
                                    className={
                                        styles.EmployeeForm__Input_Label
                                    }>
                                    On Going
                                </label>
                            </div>
                            <div
                                className={
                                    styles.EmployeeForm__InvalidFeedback
                                }>
                                {errors.endDate?.message}
                            </div>
                        </div>
                    </div> */}

                    {/* Time Basis */}
                    <div className={styles.EmployeeForm__Input}>
                        <p>Is this on a full-time or part-time basis?</p>
                        <div className={styles.EmployeeForm__Input_Radio}>
                            <div>
                                <input
                                    id="fullTime"
                                    type="radio"
                                    value="full time"
                                    {...register("timeBase")}
                                    className={`form-check-input ${
                                        errors.timeBase ? "_Invalid" : ""
                                    }`}
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
                                    value="part time"
                                    {...register("timeBase")}
                                    className={`form-check-input ${
                                        errors.timeBase ? "_Invalid" : ""
                                    }`}
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
                            Weekly Hours
                        </label>
                        <input
                            id="weeklyHours"
                            type="text"
                            {...register("weeklyHours")}
                            className={`styles.EmployeeForm__Control ${
                                errors.weeklyHours ? "_Invalid" : ""
                            }`}
                        />
                        <div className={styles.EmployeeForm__InvalidFeedback}>
                            {errors.weeklyHours?.message}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className={styles.EmployeeForm__Input_Btns}>
                        <button
                            type="submit"
                            className={styles.EmployeeForm__Btn}>
                            Register
                        </button>
                        <button
                            type="button"
                            onClick={() => reset()}
                            className={styles.EmployeeForm__Btn_Out}>
                            Cancel
                        </button>
                    </div>
                    {/* <DatePicker /> */}
                </form>
            </div>
        </>
    );
};

export default EmployeeForm;
