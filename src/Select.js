import React from "react";
import Select, { components } from "react-select";

const colourOptions = [
  {
    value: "red",
    label: "Red",
    description:
      "Is there any other way using bootstrap or material UI I can achieve this. I am using react select npm package for dropdown list .you can find live link and code below"
  },
  {
    value: "green",
    label: "Green",
    description:
      'Message to display in the menu when there are no options and isLoading is true. By default it is "Loading..."'
  },
  {
    value: "blue",
    label: "Blue",
    description:
      "Loading indicator to be displayed in the Indicators Container when isLoading is true. By default it is three dots."
  }
];

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      // width: '50%',
    // width: '250px',
    // height: '60px',


      backgroundColor: isFocused ? "#00A3BE" : "",

      color: isFocused ? "#F9FAFC" : "#191D2F",
      display: "flex",
      paddingLeft: 0,

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
  menu: styles => ({ ...styles,                 
    width: '300px',
  })   ,
  control: styles => ({ ...styles,                 
    width: '300px'
   }), 
};

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className="left">{props.isSelected ? "✔" : ""}</div>
      <div className="right">
        <strong className="title">{props.data.label}</strong>
        <div>{props.data.description}</div>
      </div>
    </components.Option>
  );
};

export default (props) => (
  <div backgroundColor="#191D2F">
    <Select
      defaultValue={colourOptions[1]}
      label="Single select"
      options={colourOptions}
      styles={colourStyles}
      components={{
        Option
      }}
    />
  </div>
);
