import Button from "../components/Button";
import React, { useEffect } from "react";
import Image from "next/image";
import leftImage from "../assets/NewProject.svg";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import styles from "../styles/CreateInstance.module.css";
import StepProgressBar from "../components/ProgressBar";
import { useState } from "react";
import withAuth from "../components/PrivateRoute";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useRouter } from "next/router";

const Deployment = () => {
    const [percent, setPercent] = useState(0);
    const [status, setStatus] = useState("");
    const router = useRouter();

    useEffect(() => {
        const getStatus = () => {
            axios
                .get(`http://172.105.40.93/deploy/repo_status/${router.query.taskId}`)
                .then((res) => {
                    if (res.data.task_status === "SUCCESS" || res.data.task_status === "FAILED") {
                        setPercent(1);
                    } else {
                        setPercent(res.data.task_result.process.percent);
                        setTimeout(getStatus, 5000);
                    }
                    setStatus(res.data.task_status);
                });
        };

        getStatus();
    }, []);

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
                            <h2 className={styles.heading}>Deploying your new cluster ✨</h2>
                            <p className="subheading">Some filler text...</p>

                            <h4>{percent * 100}% complete</h4>
                            <h3>{status}</h3>
                            {/* <div className="progress-bar">
                                <StepProgressBar />
                            </div> */}
                        </Fade>
                    </div>
                </div>
                <div className="button-container">
                    <Button className="next" text="Next" redirectPage={"/lol"} />
                </div>
            </div>
        </>
    );
};

export default withAuth(Deployment);
