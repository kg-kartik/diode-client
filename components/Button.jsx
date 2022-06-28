import Router from "next/router";
import styles from "../styles/Button.module.css";
import { TailSpin } from "react-loader-spinner"
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ showArrow = true, text, redirectPage, arrow_size = 22, size, cb, loading = false }) => {
    return (
        <button
            className={styles.button + " " + `${size === "large" ? styles.large : styles.small}`}
            onClick={cb}
        >
            {loading ? <> Loading &nbsp; <TailSpin ariaLabel="loading-indicator" height="20" width="20" color="#567df4" /></> : <div className="text">{text}</div>
            }
            {showArrow && <FaLongArrowAltRight className="arrow" size={arrow_size} />}
        </button >
    );
};
export default Button;
