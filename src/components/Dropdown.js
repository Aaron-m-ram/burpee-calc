import React from "react";

const Dropdown = ({ optionsState, handleChange }) => {
  return (
    <select
      className="form-select focus:outline-none focus:ring focus:border-white rounded-sm mt-1"
      value={optionsState} //this lets you pick what is going to be the value selected default is nothing
      onChange={handleChange}
    >
      <option value="0">please pick</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
  );
};

export default Dropdown;
