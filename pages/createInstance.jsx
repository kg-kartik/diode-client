import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import leftImage from "../assets/NewProject.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import styles from "../styles/CreateInstance.module.css";
import InputBox from "../components/InputBox";
import Axios from "axios";
import Link from "next/link";

const CreateInstance = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        Axios.post("https://876f-103-87-56-67.ngrok.io/details/all", {
            token: "612528e31e02e0279cb3f08d5237af11a9f780a0991e1b653663b5871dcf6543"
        })
            .then((res) => {
                let regions = [];

                res.data.regions.map((region) => {
                    regions.push({
                        value: region.id,
                        label: region.id
                    });
                });
                setOptions(regions);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("");

    const handleInputValue = (inputValue) => {
        setInputValue(inputValue);
    };

    const handleDropdownValue = (inputValue) => {
        setDropdownValue(inputValue);
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
                        <h2 className={styles.heading}>New Project ✨</h2>
                        <p className="subheading">The first step to building something awesome</p>
                        <div className={styles.formContainer}>
                            <div className={styles.form}>
                                <p className="label">Project Name</p>
                                {/* <Dropdown placeholder={"Select region"} options={options1} /> */}
                                <InputBox
                                    value={inputValue}
                                    placeholder={"Something cool...?"}
                                    cb={handleInputValue}
                                />
                            </div>

                            <div className={styles.form}>
                                <p className="label">Region</p>
                                <Dropdown
                                    value={dropdownValue}
                                    cb={handleDropdownValue}
                                    placeholder={"Somewhere Close"}
                                    options={options}
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="button-container">
                <Button
                    className="next"
                    text="Next"
                    cb={() => {
                        return <Link href="/selectInstance" />;
                    }}
                />
            </div>
        </div>
    );
};

export default CreateInstance;
