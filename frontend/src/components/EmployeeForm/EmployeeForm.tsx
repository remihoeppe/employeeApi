import styles from "./EmployeeForm.module.scss";
import {
    useForm,
    SubmitHandler,
    FieldValues,
    FieldError,
    DeepMap,
} from "react-hook-form";
import { Employee } from "src/services/EmployeeResponse";

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
    DeepMap<TFieldValues, FieldError>;

type Inputs = {
    example: string;
    exampleRequired: string;
};

const EmployeeForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Employee>();

    const onSubmit: SubmitHandler<Employee> = (data) => console.log(data);

    console.log(watch("firstName")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className={styles.EmployeeForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.FormInput}>
                <p>First Name</p>
                <input {...register("firstName")} />
                <div className={styles.FormInput__Error}>{}</div>
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <div className={styles.EmployeeForm__Input}>
                <label htmlFor="">Test 2</label>
                <input {...register("middleName", { required: true })} />
            </div>

            {/* errors will return when field validation fails  */}
            {errors.firstName && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default EmployeeForm;
