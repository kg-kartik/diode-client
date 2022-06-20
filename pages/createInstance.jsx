import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import React from "react";
import Image from "next/image";
import backImage from "../assets/page1.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import styles from "../styles/CreateInstance.module.css";
import InputBox from "../components/InputBox";

const CreateInstance = () => {
    const options1 = [
        { value: "India", label: "India" },
        { value: "America", label: "America" },
        { value: "Europe", label: "Europe" }
    ];

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <Bounce>
                    <div className={styles.left}>
                        <Image src={backImage} alt="illus" />
                    </div>
                </Bounce>

                <div className={styles.right}>
                    <Fade cascade triggerOnce>
                        <h2 className={styles.heading}>Create VM Instance</h2>
                        <p className="subheading">
                            &Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima
                            ullam dolorum, perferendis harum tenetur facilis et voluptas repellat
                            maiores natus dicta quasi odit voluptatibus architecto eos fugit
                            molestiae eveniet.
                        </p>
                        <div className={styles.formContainer}>
                            <div className={styles.form}>
                                <p className="label">App name</p>
                                {/* <Dropdown placeholder={"Select region"} options={options1} /> */}
                                <InputBox placeholder={"Enter app name"} />
                            </div>

                            <div className={styles.form}>
                                <p className="label">Select region</p>
                                <Dropdown placeholder={"Select region"} options={options1} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="button-container">
                <Button className="next" text="Next Page" redirectPage={"/lol"} />
            </div>
        </div>
    );
};

export default CreateInstance;
