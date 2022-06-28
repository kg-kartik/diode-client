import styles from "../styles/Navbar.module.css"
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    LINODE
                </div>
                <div className={styles.link1}>
                    Link 1
                </div>
                <div className={styles.link2}>
                    Link 2
                </div>
                <div className={styles.link3}>
                    Link 3
                </div>
            </div>

        </nav>
    )
}
export default Navbar;