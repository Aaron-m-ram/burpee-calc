import React from 'react'

const LabelInput = ({name})=> {
    return (
        <div>
            <label>
                {name}
                <input type="Number" min= "0" max="99"/>
            </label>
        </div>
    )
}

export default LabelInput
