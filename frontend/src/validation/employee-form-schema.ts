import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const employeeFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/[A-Za-z]/, "A name can only include letters from A to Z")
        .max(40, "A last name can only be 20 character long")
        .required("This field is required"),
    middleName: Yup.string()
        .matches(
            /^[A-Za-z\s]+$/,
            "Middle names can only include letters from A to Z",
        )
        .max(40, "A last name can only be 40 character long"),
    lastName: Yup.string()
        .matches(
            /^[A-Za-z\s]+$/,
            "A last name can only include letters from A to Z and hyphens",
        )
        .max(40, "A last name can only be 40 character long")
        .required("This field is required"),
    mobileNumber: Yup.string()
        .matches(
            /(?:\(0\)[23478]|\(?0?[23478]\)?)\d{8}/,
            "This number must be a valid Australian mobile number.",
        )
        .required("Every employee must suplly a mobile number"),
    email: Yup.string().email().required("This field is required"),
    address: Yup.string().required("This field is required"),
    startDate: Yup.string()
        .matches(
            /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
            "Please enter the date as YYYY-MM-DD",
        )
        .required("This field is required"),
    endDate: Yup.string()
        // .test(
        //     "endDate",
        //     "End Date must either be empty or be entered as YYYY-MM-DD,",
        //     (endDate) => {
        //         if (endDate === "") {
        //             return true;
        //         }
        //         endDate?.match(
        //             /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
        //         );
        //     },
        // )
        .notRequired(),
    contractType: Yup.string().test(
        "contractType",
        "Must be either Permanent or Contract",
        (contractType) =>
            contractType === "Permanent" || contractType === "Contract",
    ),
    timeBase: Yup.string().test(
        "contractType",
        "Must be either Full Time or Part Time",
        (timeBase) => timeBase === "Full time" || timeBase === "Part time",
    ),
    weeklyHours: Yup.string().required("This field is required"),
});
