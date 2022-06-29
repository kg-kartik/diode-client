import styles from "../styles/Landing.module.css";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Landing = () => {
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const handleStart = () => {
        if (user) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>Diode</div>
                <div className={styles.subheading}>Deployments Made Simple</div>
                <div className={styles.para}>
                    Diode is a platform that lets you deploy your web apps on Linode in two easy
                    steps so that you can spend more time on developing awesome products and less
                    time worrying about getting them up and running
                </div>
                <Button text="Get Started" cb={handleStart} showArrow={false} size={"large"} />
            </div>
            <Footer />
        </>
    );
};
export default Landing;
