import { useState } from "react";
import React from "react";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import LabelInput from "./components/Label+Input";

import { ageGetter, burpee } from "./data/Logic";

function App() {
  //handle the clicks for submit button
  const handleClick = () => {
    let scoresheet = ageGetter(ageInput, selectedValue); //get score sheet
    let finalScore = burpee(burpInput, scoresheet); //get final score
    alert("Burpees: " + burpInput + "final score" + finalScore);
  };

  //handle the states for the label inputs
  const [ageInput, setAgeInput] = useState(""); //set the state for age
  const [burpInput, setBurpInput] = useState(""); //set the state for burpee
  const onInput = (e) => setAgeInput(e.target.value); //get the input for age
  const onChange = (e) => setBurpInput(e.target.value); //get the input for burpee

  //handles the states for the Dropdown
  const [selectedValue, setSelectedValue] = useState(""); //set the state for gender
  const handleChange = (e) => setSelectedValue(e.target.value); //get gender value

  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <h1 className="text-2xl text-white">Burpee Calc</h1>

        <Dropdown handleChange={handleChange} />
        <LabelInput clnvar="pr-7 text-white" name="Age:" input={onInput} />
        <LabelInput clnvar="pr-2 text-white" name="Burpee:" input={onChange} />

        <Button label="Submit" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
