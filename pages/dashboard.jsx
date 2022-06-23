import LineChart from "../components/Chart";
import Table from "../components/Table";
import styles from "../styles/Dashboard.module.css";
import { tableData } from "../components/data";

const Dashboard = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

    const data1 = {
        labels,
        datasets: [
            {
                label: "swap",
                data: tableData.data.io.swap,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "io",
                data: tableData.data.io.io,
                borderColor: "rgba(14, 87, 196)",
                backgroundColor: "rgba(14, 87, 196,0.5)"
            }
        ]
    };

    const data2 = {
        labels,
        datasets: [
            {
                label: "netv6 out",
                data: tableData.data.netv6.out,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "netv6 in",
                data: tableData.data.netv6.in,
                borderColor: "rgba(14, 87, 196)",
                backgroundColor: "rgba(14, 87, 196,0.5)"
            },
            {
                label: "netv6 private_in",
                data: tableData.data.netv6.private_in,
                borderColor: "rgba(6, 150, 76)",
                backgroundColor: "rgba(6, 150, 76,0.5)"
            },
            {
                label: "netv6 private_out",
                data: tableData.data.netv6.private_out,
                borderColor: "rgba(158, 6, 32)",
                backgroundColor: "rgba(158, 6, 32,0.5)"
            }
        ]
    };

    const data3 = {
        labels,
        datasets: [
            {
                label: "netv4 out",
                data: tableData.data.netv4.out,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "netv4 in",
                data: tableData.data.netv4.in,
                borderColor: "rgba(14, 87, 196)",
                backgroundColor: "rgba(14, 87, 196,0.5)"
            },
            {
                label: "netv4 private_in",
                data: tableData.data.netv4.private_in,
                borderColor: "rgba(6, 150, 76)",
                backgroundColor: "rgba(6, 150, 76,0.5)"
            },
            {
                label: "netv4 private_out",
                data: tableData.data.netv4.private_out,
                borderColor: "rgba(158, 6, 32)",
                backgroundColor: "rgba(158, 6, 32,0.5)"
            }
        ]
    };

    const data4 = {
        labels,
        datasets: [
            {
                label: "swap",
                data: tableData.data.cpu,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            }
        ]
    };

    return (
        <div>
            <div className={styles.firstRow}>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data1} />
                    </div>
                    <Table />
                </div>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data2} />
                    </div>
                    <Table />
                </div>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data3} />
                    </div>
                    <Table />
                </div>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data4} />
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;