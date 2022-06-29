import React, { useEffect, useState } from "react";
import LineChart from "../components/Chart";
import NonSelectableTableComponent from "../components/NonSelectableTable";
import styles from "../styles/Dashboard.module.css";
import { calculateData } from "../utils/dashboardTableDataBuilder";
import withAuth from "../components/PrivateRoute";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import axios from "axios";

const Metrics = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

    const router = useRouter();
    const [tableData, setTableData] = useState({});

    let user;
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }

    useEffect(() => {
        if (!router.isReady) return;
        axios
            .get(
                `${process.env.NEXT_PUBLIC_FASTAPI_URL}/instance/metrics?id=${router.query.instanceId}&token=${user.personalaccesstoken}`
            )
            .then((res) => {
                console.log(res.data);
                setTableData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [router.isReady]);

    const data1 = {
        labels,
        datasets: [
            {
                label: "swap",
                data: tableData?.data?.io?.swap,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "io",
                data: tableData?.data?.io?.io,
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
                data: tableData?.data?.netv6?.out,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "netv6 in",
                data: tableData?.data?.netv6?.in,
                borderColor: "rgba(14, 87, 196)",
                backgroundColor: "rgba(14, 87, 196,0.5)"
            },
            {
                label: "netv6 private_in",
                data: tableData?.data?.netv6?.private_in,
                borderColor: "rgba(6, 150, 76)",
                backgroundColor: "rgba(6, 150, 76,0.5)"
            },
            {
                label: "netv6 private_out",
                data: tableData?.data?.netv6?.private_out,
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
                data: tableData?.data?.netv4?.out,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "netv4 in",
                data: tableData?.data?.netv4?.in,
                borderColor: "rgba(14, 87, 196)",
                backgroundColor: "rgba(14, 87, 196,0.5)"
            },
            {
                label: "netv4 private_in",
                data: tableData?.data?.netv4?.private_in,
                borderColor: "rgba(6, 150, 76)",
                backgroundColor: "rgba(6, 150, 76,0.5)"
            },
            {
                label: "netv4 private_out",
                data: tableData?.data?.netv4?.private_out,
                borderColor: "rgba(158, 6, 32)",
                backgroundColor: "rgba(158, 6, 32,0.5)"
            }
        ]
    };

    const data4 = {
        labels,
        datasets: [
            {
                label: "cpu",
                data: tableData?.data?.cpu,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            }
        ]
    };

    const columns = React.useMemo(
        () => [
            {
                Header: " ",
                accessor: "rowName"
            },
            {
                Header: "Max",
                accessor: "max"
            },
            {
                Header: "Avg",
                accessor: "avg"
            },
            {
                Header: "Last",
                accessor: "last"
            }
        ],
        []
    );

    console.log(Object.keys(tableData).length);

    return (
        <>
            <Navbar />
            {Object.keys(tableData).length === 0 ? (
                <center>
                    <h3 style={{ marginTop: "200px" }}>{"Loading data.."}</h3>
                </center>
            ) : Object.keys(tableData).length !== 1 ? (
                <div>
                    <div className={styles.firstRow}>
                        <div className={styles.outerContainer}>
                            <div className={styles.chartContainer}>
                                <LineChart data={data1} />
                            </div>

                            <NonSelectableTableComponent
                                data1={calculateData("swap", tableData?.data?.io?.swap)}
                                data2={calculateData("io", tableData?.data?.io?.io)}
                            />
                        </div>
                        <div className={styles.outerContainer}>
                            <div className={styles.chartContainer}>
                                <LineChart data={data2} />
                            </div>
                            <NonSelectableTableComponent
                                data1={calculateData("in", tableData?.data?.netv6?.in)}
                                data2={calculateData("out", tableData?.data?.netv6?.out)}
                                data3={calculateData(
                                    "private_in",
                                    tableData?.data?.netv6?.private_in
                                )}
                                data4={calculateData(
                                    "private_out",
                                    tableData?.data?.netv6?.private_out
                                )}
                            />
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.outerContainer}>
                            <div className={styles.chartContainer}>
                                <LineChart data={data3} />
                            </div>
                            <NonSelectableTableComponent
                                data1={calculateData("in", tableData?.data.netv4?.in)}
                                data2={calculateData("out", tableData?.data.netv4?.out)}
                                data3={calculateData(
                                    "private_in",
                                    tableData?.data?.netv4?.private_in
                                )}
                                data4={calculateData(
                                    "private_out",
                                    tableData?.data?.netv4?.private_out
                                )}
                            />
                        </div>
                        <div className={styles.outerContainer}>
                            <div className={styles.chartContainer}>
                                <LineChart data={data4} />
                            </div>
                            <NonSelectableTableComponent
                                data1={calculateData("cpu", tableData?.data?.cpu)}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <center>
                    <h3 style={{ marginTop: "200px" }}>{"Data unavailable.."}</h3>
                </center>
            )}
        </>
    );
};
export default withAuth(Metrics);
