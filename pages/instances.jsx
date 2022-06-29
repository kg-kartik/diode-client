import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Instances.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Instance = () => {
    let user;
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }
    const [instanceData, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .post("http://localhost:5000/user/getInstances", {
                userId: user._id
            })
            .then((res) => {
                console.log(res.data.data, "daata");
                setData(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className={styles.cardsContainer}>
                {instanceData &&
                    instanceData.map((instance) => {
                        return (
                            <Card instanceName={instance.name} buildpackName={instance.buildpack} />
                        );
                    })}
            </div>
        </>
    );
};
export default Instance;
