import { useEffect, useState } from "react";
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
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

const Environment_Input = ({ showButton, count, setCount, showCancelButton }) => {
    return (
        <div className={styles.input_container}>
            <InputBox placeholder={"Enter Key Name"} />
            <InputBox placeholder={"Enter Value"} />
            {showButton && (
                <Button
                    className="next"
                    text="Add"
                    size="small"
                    showArrow={false}
                    arrow_size={12}
                    cb={() => {
                        setCount(count + 1);
                    }}
                />
            )}
            {showCancelButton && <CancelButton size="small" arrow_size={12} />}
        </div>
    );
};

const SelectRepo = () => {
    const { data: session } = useSession();
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        let repoArr = [];
        if (session) {
            console.log(session.user, "session");
            let uid = session.user.image.slice(40, 48);
            axios.get(`https://api.github.com/user/${uid}`).then((res) => {
                console.log(res.data, "re");
                axios.get(`https://api.github.com/users/${res.data.login}/repos`).then((res) => {
                    res.data.map((repo) => {
                        repoArr.push({
                            value: repo.html_url,
                            label: repo.name
                        });
                    });
                    console.log(repoArr);
                    setRepos(repoArr);
                });
            });
        } else {
            repoArr.push({
                value: "Configure your github app",
                label: "Configure your github app"
            });
            setRepos(repoArr);
        }
    }, [session]);

    const [count, setCount] = useState(1);

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
                                <Button className="next" text="Next" cb={() => signOut()} />
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
