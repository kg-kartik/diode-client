import { useState, useMemo } from "react";
const tabs = [
    {
        id: 1,
        name: "Standard",
        comp: "" //Table to be rendered with filtered rows
    },
    {
        id: 2,
        name: "High memory",
        comp: "" //Table to be rendered with filtered rows
    },
    {
        id: 3,
        name: "Nanode",
        comp: "" //Table to be rendered with filtered rows
    },
    {
        id: 4,
        name: "Dedicated",
        comp: "" //Table to be rendered with filtered rows
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
