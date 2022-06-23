import { useState, useMemo } from "react";
import TableComponent from "../components/Table";
import data from "../constants/data"



function filterData(filterValue) {
    const result = data.filter(item => item.class === filterValue);
    const final_result = [];
    result.map(item => {
        const obj = {};
        // TODO: Destructuring
        obj.monthly = item.price.monthly;
        obj.hourly = item.price.hourly;
        obj.memory = item.memory;
        obj.vcpus = item.vcpus;
        obj.disk = item.disk;
        obj.transfer = item.transfer;
        obj.network_out = item.network_out;
        final_result.push(obj);
    })
    return final_result;
}

const columns = [
    {
        Header: "Montly",
        getToggleAllRowsSelectedProps: false,
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
    },
]
const tabs = [
    {
        id: 1,
        name: "Standard",
        comp: <TableComponent columns={columns} data={filterData("standard")} showCheckbox={true} />
    },
    {
        id: 2,
        name: "High memory",
        comp: <TableComponent columns={columns} data={filterData("highmem")} showCheckbox={true} />
    },
    {
        id: 3,
        name: "Nanode",
        comp: <TableComponent columns={columns} data={filterData("nanode")} showCheckbox={true} />
    },
    {
        id: 4,
        name: "Dedicated",
        comp: <TableComponent columns={columns} data={filterData("dedicated")} showCheckbox={true} />
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

    return (
        <div className="AboutArea">
            <div className="container">
                <Navigation tabs={tabs} onNavClick={setActiveTab} activeTabId={activeTabId} />
            </div>
            <Tab tab={activeTab} />
        </div>
    );
};

export default SelectInstance;
