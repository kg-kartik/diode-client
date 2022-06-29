import styles from "../styles/Landing.module.css"
import Button from "../components/Button";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    DIODE
                </div>
                <div className={styles.subheading}>
                    Deployments Made Simple
                </div>
                <div className={styles.para}>
                    Diode is a platform that lets you deploy your web apps on Linode in two easy steps so that you can spend more time on developing awesome products and less time worrying about getting them up and running 😉
                </div>
                <Button text="Get Started" />
            </div>
            <Footer />
        </>
    )
}
export default Landing;