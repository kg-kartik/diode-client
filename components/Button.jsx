import Router from "next/router";
import styles from "../styles/Button.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ text, redirectPage, arrow_size = 22, size = 'large', cb }) => {
    return (
        <button className={styles.button + ' ' + `${size === 'large' ? styles.large : styles.small}`} onClick={cb} >
            <div className="text">{text}</div>
            <FaLongArrowAltRight className="arrow" size={arrow_size} />
        </button>
    );
};
export default Button;
