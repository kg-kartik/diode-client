import LineChart from "../components/Chart";
import Table from "../components/Table";
import styles from "../styles/Dashboard.module.css"


const Dashboard = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
                label: 'CPU Usage',
                data: labels.map(() => Math.random(0, 100) * 10),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ]
    }


    return (
        <div >
            <div className={styles.firstRow}>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data} />
                    </div>
                    <Table />
                </div>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data} />
                    </div>
                    <Table />
                </div>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data} />
                    </div>
                    <Table />
                </div>
                <div className={styles.outerContainer}>
                    <div className={styles.chartContainer}>
                        <LineChart data={data} />
                    </div>
                    <Table />
                </div>
            </div>
        </div >
    )
}
export default Dashboard;