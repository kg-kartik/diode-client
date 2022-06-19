import Select from 'react-select';
import { useState } from 'react';

const Dropdown = ({options}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color:"#e0e1dd",
      paddingLeft:"10px"
    }),
    container: (provided,state) => ({
      ...provided,
      width:"15%",
      height:"10%"
    }),
    control: (provided) => ({
        ...provided,
        color:"#e0e1dd",
        paddingLeft:"24px",
        border:"1px solid transparent"
    }),
    singleValue: (provided, state) => {
      return {...provided}
    }
  }

  return (
    <>
      <Select
        isSearchable={false}
        styles={customStyles}
        placeholder="Select image"
        theme={(theme) => ({
          ...theme,
          colors: {
            neutral0:"#24272bff",
            // primary:"#415a77",
            primary25:"#4a525aff;"
          },
      })}
      menuColor="red"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </>
  );
}

export default Dropdown;