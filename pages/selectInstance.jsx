import { useState, useMemo, useEffect } from "react";
import Button from "../components/Button";
import TableComponent from "../components/Table";
import data from "../constants/data";
import { useRouter } from "next/router";
import withAuth from "../components/PrivateRoute";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function filterData(filterValue) {
    const result = data.filter((item) => item.class === filterValue);
    const final_result = [];
    result.map((item) => {
        const obj = {};
        // TODO: Destructuring
        obj.name = item.label;
        obj.id = item.id;
        obj.monthly = item.price.monthly;
        obj.hourly = item.price.hourly;
        obj.memory = item.memory;
        obj.vcpus = item.vcpus;
        obj.disk = item.disk;
        obj.transfer = item.transfer;
        obj.network_out = item.network_out;
        final_result.push(obj);
    });
    return final_result;
}

const columns = [
    {
        Header: "Name",
        getToggleAllRowsSelectedProps: false,
        accessor: "name"
    },
    {
        Header: "Montly",
        accessor: "monthly"
    },
    {
        Header: "Hourly",
        accessor: "hourly"
    },
    {
        Header: "RAM",
        accessor: "memory"
    },
    {
        Header: "CPUs",
        accessor: "vcpus"
    },
    {
        Header: "Storage",
        accessor: "disk"
    },
    {
        Header: "Transfer",
        accessor: "transfer"
    },
    {
        Header: "Network Out",
        accessor: "network_out"
    }
];

const selectInstanceId = (id) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("instanceId", id);
    }
};

const tabs = [
    {
        id: 1,
        name: "Standard",
        comp: (
            <TableComponent
                columns={columns}
                data={filterData("standard")}
                showCheckbox={true}
                cb={selectInstanceId}
                style={{ transform: "translateY(50px)" }}
            />
        )
    },
    {
        id: 2,
        name: "High memory",
        comp: (
            <TableComponent
                columns={columns}
                data={filterData("highmem")}
                showCheckbox={true}
                cb={selectInstanceId}
                style={{ transform: "translateY(50px)" }}
            />
        )
    },
    {
        id: 3,
        name: "Nanode",
        comp: (
            <TableComponent
                columns={columns}
                data={filterData("nanode")}
                showCheckbox={true}
                cb={selectInstanceId}
                style={{ transform: "translateY(50px)" }}
            />
        )
    },
    {
        id: 4,
        name: "Dedicated",
        comp: (
            <TableComponent
                columns={columns}
                data={filterData("dedicated")}
                showCheckbox={true}
                cb={selectInstanceId}
                style={{ transform: "translateY(50px)" }}
            />
        )
    }
];

const Tab = (props) => {
    return <div>{props.tab.comp}</div>;
};

const Navigation = (props) => {
    return (
        <div className={`tabs`}>
            {props.tabs.map((item) => (
                <div
                    key={item.id}
                    className={`tabs__item ${props.activeTabId === item.id ? "active" : ""}`}
                    onClick={() => props.onNavClick(item.id)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

const SelectInstance = (props) => {
    const [activeTabId, setActiveTab] = useState(tabs[0].id);
    const router = useRouter();

    const activeTab = useMemo(() => tabs.find((tab) => tab.id === activeTabId), [activeTabId]);

    let user;
    if (typeof window !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"));
    }

    const createInstanceCall = () => {
        //For creating instance
        axios
            .post("http://172.105.40.93/instance/create", {
                token: user.personalaccesstoken,
                instance_type: localStorage.getItem("instanceId"),
                region: router.query.region,
                image: "linode/ubuntu22.04"
            })
            .then((res) => {
                console.log(res.data, "instance ar");
                axios
                    .post("http://172.104.207.139/user/createInstance", {
                        instanceDetails: {
                            ssh_key: res.data.password,
                            ...router.query,
                            env: JSON.parse(router.query.env),
                            ip_address: res.data.ip4_addr,
                            instanceId: res.data.id
                        },
                        userId: user._id
                    })
                    .then((response) => {
                        console.log(res.data.password);

                        const getStatus = () => {
                            axios
                                .get(
                                    `http://172.105.40.93/instance/status?id=${res.data.id}&token=${user.personalaccesstoken}`
                                )
                                .then((resp) => {
                                    let count = 0;
                                    console.log(count + 1);
                                    if (resp.data.status !== "running") {
                                        setTimeout(getStatus, 5000);
                                    } else {
                                        let obj = {};

                                        for (var i = 0; i < response.data.data.env.length; i++) {
                                            var item = response.data.data.env[i];
                                            obj[item.key] = item.value;
                                        }

                                        axios
                                            .post("http://172.105.40.93/deploy/repo_new", {
                                                ip_addr: response.data.data.ip_address,
                                                ssh_key: res.data.password,
                                                app_type: response.data.data.buildpack,
                                                repo_url: response.data.data.repo,
                                                env: JSON.stringify(env)
                                            })
                                            .then((resDeploy) => {
                                                console.log(resDeploy.data, "deployment");
                                                router.push({
                                                    pathname: "/deployment",
                                                    query: { taskId: resDeploy.data.task_id }
                                                });
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });

                                        return;
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        };

                        getStatus();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Navbar />
            <div className="AboutArea" style={{ marginTop: "100px" }}>
                <h2
                    style={{
                        marginBottom: "3%",
                        marginLeft: "5%"
                    }}
                >
                    Select Instance Type
                </h2>
                <div className="container" style={{ marginLeft: "5%" }}>
                    <Navigation tabs={tabs} onNavClick={setActiveTab} activeTabId={activeTabId} />
                </div>
                <Tab tab={activeTab} />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "80px",
                        marginBottom: "100px"
                    }}
                >
                    <Button
                        size={"large"}
                        showArrow={false}
                        text="Create Instance"
                        cb={createInstanceCall}
                    />
                </div>
            </div>
        </>
    );
};

export default withAuth(SelectInstance);
