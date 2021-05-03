import React from "react";
import ReactDOM from "react-dom";
// import Select from "./Select";
import SelectDropdown from "./components/ReusableDropdown";
import "./styles.css";

function App() {
  return (
    <div>
      
      <div className="divWhite">
        <div Style="display: inline-block;margin-left:50px;margin-top:50px">
          <SelectDropdown data={{ theme: 'white', description: false }} />
        </div>
        <div Style="display: inline-block;margin-left:100px">
          <SelectDropdown data={{ theme: 'white', description: true }} />
        </div>
      </div>
      <div className="divBlack">
        <div Style="display: inline-block;margin-left:50px;margin-top:50px">
          <SelectDropdown data={{ theme: 'black', description: false }} />
        </div>
        <div Style="display: inline-block;margin-left:100px">
          <SelectDropdown data={{ theme: 'black', description: true }} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
