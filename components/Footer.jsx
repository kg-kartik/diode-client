import styles from "../styles/Footer.module.css";
import { SiHashnode } from "react-icons/si";
import { SiLinode } from "react-icons/si";

const Footer = () => {
    return (
        <nav className={styles.footer}>
            <SiHashnode size={30} />
            {"\u2715"}
            <SiLinode size={30} />
        </nav>
    );
};
export default Footer;
