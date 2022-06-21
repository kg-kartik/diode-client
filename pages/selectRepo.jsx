import { useState } from "react"
import styles from "../styles/SelectRepo.module.css";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import backImage from "../assets/page1.svg";
import github from "../assets/github.svg";
import docker from "../assets/docker.svg";
import nodejs from "../assets/nodejs.svg";
import google_cloud from "../assets/google_cloud.svg";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Image from "next/image";
import ReactTooltip from 'react-tooltip';

const Environment_Input = () => {
    return (
        <div className={styles.input_container}>
            <InputBox placeholder={"Enter Key Name"} />
            <InputBox placeholder={"Enter Value"} />
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
                        <h2 className={styles.heading}>Select GitHub Repositories</h2>
                        <div className={styles.repoContainer}>
                            <div className={styles.form}>
                                <p className="label">Github Repos</p>
                                <Dropdown placeholder={"Select repos"} options={repos} />
                            </div>
                            <div className={styles.icons}>
                                {icons.map((item) => {
                                    return (
                                        <div className={styles.outerCircle}>
                                            <Image src={item.src} />
                                        </div>
                                    )
                                })}
                            </div>

                            <div className={styles.environment_container}>
                                <p className="label">Add Environment Variables</p>
                                {
                                    [...Array(count)].map(item => {
                                        return (
                                            <Environment_Input />
                                        )
                                    })
                                }
                                <Button className="next" text="Add" arrow_size={12} onClick={() => { console.log("Hellow") }} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="button-container">
                <Button className="next" text="Next Page" redirectPage={"/lol"} />
            </div>
        </div>
    )
}
export default SelectRepo;