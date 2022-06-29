import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Instances.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Dashboard = () => {
    let user;
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }
    const [instanceData, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios
            .post(`${process.env.NEXT_PUBLIC_NODE_URL}/user/getInstances`, {
                userId: user._id
            })
            .then((res) => {
                console.log(res.data.data, "daata");
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const redDashboard = (instanceId) => {
        console.log(instanceId, "ins");
        router.push({
            pathname: "/metrics",
            query: { instanceId: instanceId }
        });
    };

    return (
        <>
            <Navbar />
            <div className={styles.cardsContainer}>
                {instanceData &&
                    instanceData.map((instance) => {
                        return (
                            <Card
                                instanceName={instance.name}
                                buildPackName={instance.buildpack}
                                cb={() => redDashboard(instance.instanceId)}
                            />
                        );
                    })}
            </div>
        </>
    );
};
export default Dashboard;
