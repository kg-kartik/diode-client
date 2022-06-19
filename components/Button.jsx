import Router from "next/router";
import styles from "../styles/Button.module.css"

const Button = ({text,redirectPage}) => {
    return (
        <button
            className={styles.button}
            onClick={() => Router.push(redirectPage)}>
            <div className="text">{text}</div>
		</button>
    )
}
export default Button;