import React from 'react'

const Dropdown = ({value, value2}) => {
    return (
        <select className="form-select focus:outline-none focus:ring focus:border-white rounded-sm mt-1">
            <option>{value}</option>
            <option>{value2}</option>
        </select>
    )
}

export default Dropdown
