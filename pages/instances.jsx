import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Instances.module.css"

const Instance = () => {
    return (
        <>
            <Navbar />
            <div className={styles.cardsContainer}>
                {/* <div className={styles.items}> */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                {/* </div> */}
            </div>
            <Footer />
        </>
    )
}
export default Instance;