import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import leftImage from "../assets/NewProject.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import styles from "../styles/CreateInstance.module.css";
import InputBox from "../components/InputBox";
import { useUser } from "../context/UserContext";

const CreateInstance = () => {
    const { login } = useUser();
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (inputValue) => {
        setInputValue(inputValue);
    };

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
                        <h2 className={styles.heading}>Login With Linode ✨</h2>
                        <p className="subheading">Get your personal access token and enter here</p>
                        <div className={styles.formContainer}>
                            <div className={styles.form}>
                                <p className="label">Token</p>
                                {/* <Dropdown placeholder={"Select region"} options={options1} /> */}
                                <InputBox
                                    value={inputValue}
                                    placeholder={"Something cool...?"}
                                    cb={handleInputValue}
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="button-container">
                <Button
                    size={"large"}
                    showArrow={false}
                    text="Login With Linode"
                    cb={() => login(inputValue)}
                />
            </div>
        </div>
    );
};

export default CreateInstance;
