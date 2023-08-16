import { useState } from "react";
import styles from "./Field.module.scss";

export interface FieldProps {
    value: string;
    onFieldClick: () => void;
}

export const Field: React.FC<FieldProps> = ({
    value,
    onFieldClick
}) => {

    return (
        <button className={`${styles.field}`} onClick={onFieldClick}>{value}</button>
    );
}