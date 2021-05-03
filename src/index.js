import React from "react";
import ReactDOM from "react-dom";

// here imported dropdown
import SelectDropdown from "./components/ReusableDropdown";
import "./styles.css";

// below data using for menuitem
const menulist = [
  {
    value: "Hopper",
    label: "Hopper",
    description:
      "Grace Hopper was an American computer scientist and US Nevy near rear admiral."
  },
  {
    value: "Holberton",
    label: "Holberton",
    description:
      "Frances Elizabeth Holberton was one the programmers in the world."
  },
  {
    value: "Teitelbaum",
    label: "Teitelbaum",
    description:
      "Ruth Teitelbaum was one of the first computer programmers int the world."
  }
];

// below data using for dropdown

const normalList = [
  {
    value: "Hopper",
    label: "Hopper",
  },
  {
    value: "Holberton",
    label: "Holberton",
   },
  {
    value: "Teitelbaum",
    label: "Teitelbaum",
   }
];

function App() {
  return (
    <div>

      <div className="divWhite">
        <div Style="display: inline-block;margin-left:50px;margin-top:50px">
          {/* here calling SelectDropdown component repetitively by changing the data
              theme : this parameter using for theme if you want black theme then your dropdown will be balck or white
              description : this parameter using if we want normal dropdown list then need to set value "false" and 
              if you want menu dropdownlist then you need to set value "true"
              data : this is use for the data you are sending
          */}
          <SelectDropdown data={{ theme: 'white', description: false, data: normalList }} />
        </div>
        <div Style="display: inline-block;margin-left:100px">
          <SelectDropdown data={{ theme: 'white', description: true, data: menulist }} />
        </div>
      </div>
      <div className="divBlack">
        <div Style="display: inline-block;margin-left:50px;margin-top:50px">
          <SelectDropdown data={{ theme: 'black', description: false, data: normalList }} />
        </div>
        <div Style="display: inline-block;margin-left:100px">
          <SelectDropdown data={{ theme: 'black', description: true, data: menulist }} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
