import { useState } from "react"
import styles from "../styles/SelectRepo.module.css";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import github from "../assets/github.svg";
import docker from "../assets/docker.svg";
import nodejs from "../assets/nodejs.svg";
import google_cloud from "../assets/google_cloud.svg";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import CancelButton from "../components/CancelButton";
import Dropdown from "../components/Dropdown";
import Image from "next/image";

const Environment_Input = ({ showButton, count, setCount, showCancelButton }) => {
    return (
        <div className={styles.input_container}>
            <InputBox placeholder={"Enter Key Name"} />
            <InputBox placeholder={"Enter Value"} />
            {showButton && <Button className="next" text="Add" size="small" arrow_size={12} cb={() => { setCount(count + 1) }} />}
            {showCancelButton && <CancelButton size="small" />}
        </div>
    )
}


const SelectRepo = () => {
    const [count, setCount] = useState(1);
    //TODO:  Set the value to be repo's unique value getting from GitHub API.
    const repos = [
        { value: "Project 1", label: "Project 1" },
        { value: "Project 2", label: "Project 2" },
        { value: "Project 3", label: "Project 3" }
    ];

    const icons = [
        { src: github },
        { src: docker },
        { src: nodejs },
        { src: google_cloud }
    ];

    // Logic: When to show Add Button.
    const arr = [...Array(count)];
    arr.fill(false);
    arr[arr.length - 1] = true;

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <Fade cascade triggerOnce>
                    <div className={styles.repoContainer}>
                        <div className={styles.form}>
                            <p className="label">Github Repos</p>
                            <Dropdown placeholder={"Select repo"} options={repos} />
                        </div>
                        <div className={styles.icons}>
                            <p className="label">Select Buildpack</p>
                            {icons.map((item) => {
                                return (
                                    // <div className={styles.outerCircle}>
                                    <Image src={item.src} />
                                    // </div>
                                )
                            })}
                        </div>

                        <div className={styles.environment_container}>
                            <p className="label">Add Environment Variables</p>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <Environment_Input key={index} showButton={item} count={count} setCount={setCount} showCancelButton={!item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default SelectRepo;