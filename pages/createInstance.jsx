import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import leftImage from "../assets/NewProject.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import styles from "../styles/CreateInstance.module.css";
import InputBox from "../components/InputBox";
import Axios from "axios";
import { useRouter } from "next/router";
import withAuth from "../components/PrivateRoute";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateInstance = () => {
    const [options, setOptions] = useState([]);
    const router = useRouter();

    let user;
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }

    useEffect(() => {
        Axios.post("http://172.105.40.93/details/all", {
            token: user?.personalaccesstoken
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
        setDropdownValue(inputValue.value);
    };

    const nextHandle = () => {
        router.push({
            pathname: "/selectInstance",
            query: { name: inputValue, region: dropdownValue, ...router.query }
        });
    };

    return (
        <>
            <Navbar />
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
                            <p className="subheading">
                                The first step to building something awesome
                            </p>
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
                    <Button className="next" text="Next" cb={nextHandle} />
                </div>
            </div>
        </>
    );
};

export default withAuth(CreateInstance);
