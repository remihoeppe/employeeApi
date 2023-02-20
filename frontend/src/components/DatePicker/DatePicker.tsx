import ReactDatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
    ReactDatepicker: string;
};

const DatePicker = () => {
    const { handleSubmit, control } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <section>
                <label>React Datepicker</label>
                <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field: { value, ...fieldProps } }) => {
                        return (
                            <ReactDatePicker
                                {...fieldProps}
                                className="input"
                                placeholderText="Select date"
                                selected={null}
                            />
                        );
                    }}
                />
            </section>
        </form>
    );
};

export default DatePicker;
