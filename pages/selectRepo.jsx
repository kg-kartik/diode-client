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
import { useRouter } from "next/router";
import withAuth from "../components/PrivateRoute";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SelectRepo = () => {
    const { data: session } = useSession();
    const [repos, setRepos] = useState([]);
    const router = useRouter();

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
                value: "Configure your gitHub app",
                label: "Configure your GitHub Account"
            });
            setRepos(repoArr);
        }
    }, [session]);

    const [selectedName, setSelectedName] = useState("");
    const [selected, setSelected] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");

    const handleDropdownValue = (inputValue) => {
        setDropdownValue(inputValue.value);
    };

    const nextHandle = () => {
        router.push({
            pathname: "/environment",
            query: { repo: dropdownValue, buildpack: selectedName }
        });
    };

    return (
        <>
            <Navbar />
            <div className={styles.section}>
                <div className={styles.container}>
                    <Bounce>
                        <div className={styles.left}>
                            <Image src={backImage} alt="illus" />
                        </div>
                    </Bounce>

                    <div className={styles.right}>
                        <Fade cascade triggerOnce>
                            <h2 className={styles.heading}>Connect your GitHub Repository 🔗</h2>
                            <p className="subheading">Choose from one of your great creations</p>
                            <div className={styles.repoContainer}>
                                <div className={styles.form}>
                                    <p className="label">Github Repositories</p>
                                    <Dropdown
                                        placeholder={"Select Repository"}
                                        options={repos}
                                        value={dropdownValue}
                                        cb={handleDropdownValue}
                                    />
                                </div>
                                <div className={styles.icons}>
                                    <p className="label">Select Buildpack</p>
                                    <div className={styles.iconsList}>
                                        <div
                                            className={styles.border}
                                            onClick={() => {
                                                setSelected(0);
                                                setSelectedName("react");
                                            }}
                                            style={{
                                                border: selected === 0 ? "1px solid grey" : ""
                                            }}
                                        >
                                            <IoLogoReact className={styles.react} />
                                        </div>
                                        <div
                                            className={styles.border}
                                            onClick={() => {
                                                setSelected(1);
                                                setSelectedName("node");
                                            }}
                                            style={{
                                                border: selected === 1 ? "1px solid grey" : ""
                                            }}
                                        >
                                            <IoLogoNodejs className={styles.node} />
                                        </div>
                                        <div
                                            className={styles.border}
                                            onClick={() => {
                                                setSelected(2);
                                                setSelectedName("django");
                                            }}
                                            style={{
                                                border: selected === 2 ? "1px solid grey" : ""
                                            }}
                                        >
                                            <DiDjango className={styles.django} />
                                        </div>
                                        <div
                                            className={styles.border}
                                            onClick={() => {
                                                setSelected(3);
                                                setSelectedName("fastapi");
                                            }}
                                            style={{
                                                border: selected === 3 ? "1px solid grey" : ""
                                            }}
                                        >
                                            <SiFastapi className={styles.fast} />
                                        </div>
                                        <div
                                            className={styles.border}
                                            onClick={() => {
                                                setSelected(4);
                                                setSelectedName("flask");
                                            }}
                                            style={{
                                                border: selected === 4 ? "1px solid grey" : ""
                                            }}
                                        >
                                            <SiFlask className={styles.flask} />
                                        </div>
                                        <div
                                            className={styles.border}
                                            onClick={() => {
                                                setSelected(5);
                                                setSelectedName("redis");
                                            }}
                                            style={{
                                                border: selected === 5 ? "1px solid grey" : ""
                                            }}
                                        >
                                            <SiRedis className={styles.redis} />
                                        </div>
                                    </div>
                                </div>

                                <div className="button-container">
                                    <Button className="next" text="Next" cb={nextHandle} />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
};
export default withAuth(SelectRepo);
