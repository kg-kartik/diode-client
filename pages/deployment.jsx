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
    const [percent, setPercent] = useState(null);
    const [status, setStatus] = useState("lol");
    const router = useRouter();

    useEffect(() => {
        const getStatus = () => {
            if (!router.isReady) return;

            if (router.query.taskId) {
                axios
                    .get(
                        `${process.env.NEXT_PUBLIC_FASTAPI_URL}/deploy/repo_status/${router.query.taskId}`
                    )
                    .then((res) => {
                        if (
                            res.data?.task_status === "SUCCESS" ||
                            res.data?.task_status === "FAILURE"
                        ) {
                            setPercent(1);
                        } else if (res.data?.task_status === "PENDING") {
                            console.log("in pending");
                            setPercent(0);
                            setTimeout(getStatus, 10000);
                        } else {
                            console.log("in");
                            setPercent(res.data?.task_result.process_percent);
                            setTimeout(getStatus, 10000);
                        }
                        setStatus(res.data?.task_status);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        };

        getStatus();
    }, [router.isReady]);

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

                            <h4 style={{ marginTop: "10%", fontSize: "24px", opacity: 0.8 }}>
                                {percent * 100}% complete
                            </h4>
                            <h3 style={{ fontSize: "22px", opacity: 0.8 }}>{status}</h3>
                            {status === "SUCCESS" ? (
                                <p style={{ fontSize: "18px", opacity: 0.8 }}>
                                    See your deployed app at <a> {router.query.ip}</a>
                                </p>
                            ) : (
                                <></>
                            )}
                            {/* <div className="progress-bar">
                                <StepProgressBar />
                            </div> */}
                        </Fade>
                    </div>
                </div>
                {/* <div className="button-container">
                    <Button className="next" text="Next" redirectPage={"/lol"} />
                </div> */}
            </div>
        </>
    );
};

export default withAuth(Deployment);
