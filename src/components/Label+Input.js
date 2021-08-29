import React from "react";

const LabelInput = ({ name, clnvar, input }) => {
  return (
    <div className="pt-2 pb-1">
      <label className={clnvar}>
        {" "}
        {/* be able to use Tailwind css  */}
        {name} {/* each have unique names */}
      </label>
      <input
        className="focus:outline-none focus:ring focus:border-white rounded-sm"
        type="Number"
        min="0"
        max="99"
        defaultValue="0"
        onChange={input}
      />{" "}
      {/* uplift input to parent */}
    </div>
  );
};

export default LabelInput;

/* import {useState} from 'react'

const LabelInput = ({name,clnvar})=> {
    const[input, setInput] = useState('');
    return (
        <div className="pt-2 pb-1">
            <label className={clnvar}>
                {name}
            </label>
            <input className="focus:outline-none focus:ring focus:border-white rounded-sm" 
                   type="Number" min= "0" max="99" value={input} onInput={e => setInput(e.target.value)}/>
        </div>
    )
}

export default LabelInput */
