import React from 'react'

const Dropdown = ({value, value2}) => {
    return (
        <select className="form-select block w-full mt-1">
            <option>{value}</option>
            <option>{value2}</option>
        </select>
    )
}

export default Dropdown
