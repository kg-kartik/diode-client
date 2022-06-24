import { useState } from "react";
import styles from "../styles/SelectRepo.module.css";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import backImage from "../assets/page1.svg";
import github from "../assets/github.svg";
import docker from "../assets/docker.svg";
import nodejs from "../assets/nodejs.svg";
import google_cloud from "../assets/google_cloud.svg";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import CancelButton from "../components/CancelButton";
import Dropdown from "../components/Dropdown";
import Image from "next/image";



const SelectRepo = () => {
    const [count, setCount] = useState(1);
    //TODO:  Set the value to be repo's unique value getting from GitHub API.
    const repos = [
        { value: "Project 1", label: "Project 1" },
        { value: "Project 2", label: "Project 2" },
        { value: "Project 3", label: "Project 3" }
    ];

    const icons = [{ src: github }, { src: docker }, { src: nodejs }, { src: google_cloud }];

    // Logic: When to show Add Button.
    const arr = [...Array(count)];
    arr.fill(false);
    arr[arr.length - 1] = true;

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
                        <h2 className={styles.heading}>Connect to your GitHub repo</h2>
                        <p className="subheading">Link your GitHub repo in just few clicks</p>
                        <div className={styles.repoContainer}>
                            <div className={styles.form}>
                                <p className="label">Github Repos</p>
                                <Dropdown placeholder={"Select repo"} options={repos} />
                            </div>
                            <div className={styles.icons}>
                                <p className="label">Select Buildpack</p>
                                <div className={styles.iconsList}>
                                    {icons.map((item) => {
                                        return <Image src={item.src} />;
                                    })}
                                </div>
                            </div>

                            <div className="button-container">
                                <Button className="next" text="Next" redirectPage={"/lol"} />
                            </div>

                            {/* <div className={styles.environment_container}>
                                <p className="label">Add Environment Variables</p>
                                {
                                    arr.map((item, index) => {
                                        return (
                                            <Environment_Input key={index} showButton={item} count={count} setCount={setCount} showCancelButton={!item} />
                                        )
                                    })
                                }
                            </div> */}
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};
export default SelectRepo;
