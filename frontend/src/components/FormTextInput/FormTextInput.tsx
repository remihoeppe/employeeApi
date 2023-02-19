import styles from "./FormTextInput.module.scss";

const FormTextInput = () => {
    return (
        <div className={styles.FormInput}>
            <p>{}</p>
            <input type="text" />
            <div className={styles.FormInput__Error}>{}</div>
        </div>
    );
};

export default FormTextInput;
