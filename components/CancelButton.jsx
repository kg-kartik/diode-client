import styles from "../styles/CancelButton.module.css";
import { ImCross, FaLongArrowAltRight } from "react-icons/fa";

const CancelButton = ({ arrow_size = 22, size = 'large', cb }) => {
    return (
        <button className={styles.button + ' ' + `${size === 'large' ? styles.large : styles.small}`} onClick={cb} >
            <FaLongArrowAltRight size={arrow_size} />
        </button>
    );
};

export default CancelButton;