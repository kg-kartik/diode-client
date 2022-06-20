import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import styles from "../styles/CreateInstance.module.css";
import React from "react";

const CreateInstance = () => {
    const options1 = [
        { value: "India", label: "India" },
        { value: "America", label: "America" },
        { value: "Europe", label: "Europe" }
    ];

    return (
        <div className={styles.FormSection}>
            <div className={styles.container}>
                <div className={styles.heading}>Create VM Instance</div>
                <Dropdown options={options1} />
                <Button text={"Create Instance"} redirectPage="/selectRepo" />
            </div>
        </div>
    );
};

export default CreateInstance;
