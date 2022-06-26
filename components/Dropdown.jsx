import Select from "react-select";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const Dropdown = ({ options, placeholder }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedOption?.value === "Configure your github app") {
            signIn();
        }
    }, [selectedOption]);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: "#FFFFFFAF",
            paddingLeft: "5%",
            fontSize: "14px"
        }),
        container: (provided, state) => ({
            ...provided,
            width: "42%",
            marginLeft: "8%",
            borderRadius: "20px"
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: "40px"
        }),
        control: (provided) => ({
            ...provided,
            paddingLeft: "2%",
            fontSize: "14px",
            color: "#a4a4a4",
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
