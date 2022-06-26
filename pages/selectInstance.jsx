import { useState, useMemo, useEffect } from "react";
import Button from "../components/Button";
import TableComponent from "../components/Table";
import data from "../constants/data";

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
        localStorage.setItem("id", id);
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

const SelectInstance = () => {
    const [activeTabId, setActiveTab] = useState(tabs[0].id);

    const activeTab = useMemo(() => tabs.find((tab) => tab.id === activeTabId), [activeTabId]);

    useEffect(() => {
        console.log("rannnn");
        if (typeof window !== "undefined") {
            localStorage.clear("id");
        }
    }, []);

    return (
        <div className="AboutArea">
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
            <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
                <Button size={"large"} showArrow={false} text="Create Instance" cb={() => {}} />
            </div>
        </div>
    );
};

export default SelectInstance;
