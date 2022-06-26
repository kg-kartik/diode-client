import { useEffect, useState } from "react";
import styles from "../styles/SelectRepo.module.css";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import backImage from "../assets/page1.svg";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { SiFastapi, SiFlask, SiRedis } from "react-icons/si";

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

    const [selected, setSelected] = useState(false);

    // Logic: When to show Add Button.

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
                                    <div
                                        className={styles.border}
                                        onClick={() => {
                                            setSelected(0);
                                        }}
                                        style={{ border: selected === 0 ? "1px solid grey" : "" }}
                                    >
                                        <IoLogoReact className={styles.react} />
                                    </div>
                                    <div
                                        className={styles.border}
                                        onClick={() => {
                                            setSelected(1);
                                        }}
                                        style={{ border: selected === 1 ? "1px solid grey" : "" }}
                                    >
                                        <IoLogoNodejs className={styles.node} />
                                    </div>
                                    <div
                                        className={styles.border}
                                        onClick={() => {
                                            setSelected(2);
                                        }}
                                        style={{ border: selected === 2 ? "1px solid grey" : "" }}
                                    >
                                        <DiDjango className={styles.django} />
                                    </div>
                                    <div
                                        className={styles.border}
                                        onClick={() => {
                                            setSelected(3);
                                        }}
                                        style={{ border: selected === 3 ? "1px solid grey" : "" }}
                                    >
                                        <SiFastapi className={styles.fast} />
                                    </div>
                                    <div
                                        className={styles.border}
                                        onClick={() => {
                                            setSelected(4);
                                        }}
                                        style={{ border: selected === 4 ? "1px solid grey" : "" }}
                                    >
                                        <SiFlask className={styles.flask} />
                                    </div>
                                    <div
                                        className={styles.border}
                                        onClick={() => {
                                            setSelected(5);
                                        }}
                                        style={{ border: selected === 5 ? "1px solid grey" : "" }}
                                    >
                                        <SiRedis className={styles.redis} />
                                    </div>
                                </div>
                            </div>

                            <div className="button-container">
                                <Button className="next" text="Next" cb={() => signOut()} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};
export default SelectRepo;
