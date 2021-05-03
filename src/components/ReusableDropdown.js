import React from "react";
import Select, { components } from "react-select";

const SelectDrop = (props) => {
  console.log(props);
  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        //theme white
        backgroundColor: props.data.theme === 'black' ? (isSelected ? "#00A3BE" : isFocused ? "#6E7492" : "#191D2F")
          : (isSelected ? "#00A3BE" : isFocused ? "#ECEEF4" : ""),

        color: props.data.theme === 'black' ? (isFocused ? "#F9FAFC" : "#F9FAFC") : (isSelected ? "#F9FAFC" : "#191D2F"),

        //theme black
        // backgroundColor: isSelected ? "#00A3BE" : isFocused ?  "#6E7492" : "#191D2F",
        // color: isFocused ? "#F9FAFC" : "#F9FAFC",

        display: "flex",
        paddingLeft: 0,
        border: `1px solid #CDD0E0`,
        borderWidth: "0.1px",
        borderStyle: "solid",
        borderRedius: "4px",
        // height:"24px",

        "& .left": {
          display: "flex",
          justifyContent: "center",
          width: 60,
          marginTop: 3
        },
        "& .right": {
          width: "100%"
        },

        "& .right > .title": {
          display: "block",
          margin: "5px 0"
        }
      };
    },
    menu: styles => ({
      ...styles,
      width: props.data.description ? '400px' : '250px',
      height: "24px",
    }),

    singleValue: base => ({
      ...base,
      color: props.data.theme === 'black' ? "white" : ""
    }),
    control: styles => ({
      ...styles,
      width: props.data.description ? '400px' : '200px',
      background: props.data.theme === 'black' ? "#191D2F" : "ECEEF4",
      height: "24px",
    })


  };
  const Option = (OptionProps) => {
    return (
      <components.Option {...OptionProps}>
        <div className="left">{OptionProps.isSelected ? "✔" : ""}</div>
        <div className="right">
          <strong className="title">{OptionProps.data.label}</strong>
          {props.data.description ? <div>{OptionProps.data.description}</div> : null}
        </div>
      </components.Option>
    );
  };

  return <div>
    <Select
      defaultValue={props.data.data[0]}
      label="Single select"
      options={props.data.data}
      styles={colourStyles}
      components={{
        Option
      }}
    />
  </div>
};
export default SelectDrop;