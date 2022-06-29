import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const loginHandle = () => {
        if (user) {
            if (typeof window !== undefined) {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
            }
        }
        router.push("/login");
    };

    const dashHandle = () => {
        router.push("/dashboard");
    };

    const deployHandle = () => {
        router.push("/selectRepo");
    };

    const homeHandle = () => {
        router.push("/");
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.heading} onClick={homeHandle}>
                    DIODE
                </div>
                <div className={styles.link1} onClick={loginHandle}>
                    {user ? "Logout" : "Login"}
                </div>
                {user ? (
                    <>
                        <div className={styles.link2} onClick={dashHandle}>
                            Dashboard
                        </div>
                        <div className={styles.link3} onClick={deployHandle}>
                            Deploy
                        </div>
                    </>
                ) : (
                    <> </>
                )}
            </div>
        </nav>
    );
};
export default Navbar;
