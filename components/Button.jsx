import Router from "next/router";
import styles from "../styles/Button.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ text, redirectPage }) => {
    return (
        <button className={styles.button} onClick={() => Router.push(redirectPage)}>
            <div className="text">{text}</div>
            <FaLongArrowAltRight className="arrow" size={24} />
        </button>
    );
};
export default Button;
