import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React from "react";
import Image from "next/image";
import leftImage from "../assets/NewProject.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import styles from "../styles/CreateInstance.module.css";
import InputBox from "../components/InputBox";

const CreateInstance = () => {
    const options1 = [
        { value: "India", label: "India" },
        { value: "America", label: "America" },
        { value: "Germany", label: "Germany" },
        { value: "Canada", label: "Canda" },
        { value: "France", label: "France" },
        { value: "Japan", label: "Japan" },
        { value: "Italy", label: "Italy" },
        { value: "Australia", label: "Australia" },
        { value: "Poland", label: "Poland" }
    ];

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <Bounce>
                    <div className={styles.left}>
                        <Image src={leftImage} alt="illus" />
                    </div>
                </Bounce>

                <div className={styles.right}>
                    <Fade cascade triggerOnce>
                        <h2 className={styles.heading}>New Project ✨</h2>
                        <p className="subheading">The first step to building something awesome</p>
                        <div className={styles.formContainer}>
                            <div className={styles.form}>
                                <p className="label">Project Name</p>
                                {/* <Dropdown placeholder={"Select region"} options={options1} /> */}
                                {/* <div style={{ 'margin-left': '-50px', width: '35%' }}> */}

                                <InputBox placeholder={"Something cool...?"} style={{ 'margin-left': '-50px' }} />
                                {/* </div> */}
                            </div>

                            <div className={styles.form}>
                                <p className="label">Region</p>
                                <Dropdown placeholder={"Somewhere Close"} options={options1} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div >
            <div className="button-container">
                <Button className="next" text="Next" redirectPage={"/lol"} />
            </div>
        </div >
    );
};

export default CreateInstance;
