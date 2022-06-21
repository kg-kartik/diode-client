import Select from "react-select";
import { useState } from "react";

const Dropdown = ({ options, placeholder }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: "#e0e1dd",
            fontSize: "16px",
            height: "10%"
        }),
        container: (provided, state) => ({
            ...provided,
            width: "32%",
            marginLeft: "-3%",
            borderRadius: "20px"
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: "45px"
        }),
        control: (provided) => ({
            ...provided,
            fontSize: "16px",
            paddingLeft: "4%",
            color: "#e0e1dd",
            border: "1px solid transparent"
        }),
        singleValue: (provided, state) => {
            return { ...provided };
        }
    };

    return (
        <>
            <Select
                isSearchable={false}
                styles={customStyles}
                placeholder={placeholder}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        neutral0: "#24272bff",
                        // primary:"#415a77",
                        primary25: "#4a525aff;"
                    }
                })}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </>
    );
};

export default Dropdown;
