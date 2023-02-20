import styles from "./Separator.module.scss";

interface SeparatorProps {
    widthProp: string;
    heightProp: string;
    backgroudColorProp: string;
}

const Separator = ({
    widthProp = "100%",
    heightProp = "1px",
    backgroudColorProp = "gray",
}: SeparatorProps | never) => {
    return (
        <div
            // className={styles.Separator}
            style={{
                width: `${widthProp}`,
                height: `${heightProp}`,
                backgroundColor: `${backgroudColorProp}`,
            }}></div>
    );
};

export default Separator;
