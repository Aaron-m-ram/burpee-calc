import { useState } from "react";
import React from "react";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown"
import LabelInput from "./components/Label+Input";



function App() {
  
  //handle the clicks for submit button
  const handleClick= ()=> {
    alert("You clicked the button\n" + "Age: "+ ageInput + 
      "\nBurpee: " +burpInput+ "\nGender: "+ selectedValue);
  }

  //handle the states for the label inputs
  const[ageInput, setAgeInput] = useState('');
  const[burpInput, setBurpInput] = useState('')
  const onInput = (e) => setAgeInput(e.target.value)
  const onChange = (e) => setBurpInput(e.target.value)
  
  //handles the states for the Dropdown
  const [selectedValue, setSelectedValue] = useState();
  const handleChange = (e) => setSelectedValue(e.target.value)




  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <h1 className="text-2xl text-white">Burpee Calc</h1>

        <Dropdown handleChange={handleChange} />
        <LabelInput clnvar="pr-7 text-white" name="Age:" input={onInput}/>
        <LabelInput clnvar="pr-2 text-white" name="Burpee:" input={onChange}/>

        <Button label= "Click Me" onClick= {handleClick}/>
      </div>
    </div>

  );
}

export default App;

