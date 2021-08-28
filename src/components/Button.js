import React from 'react'

const Button = ({label, onClick}) => {
    return (
        <button
            className="bg-white hover:bg-gray-700 text-grey-700 font-semibold
                       hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
            onClick= {onClick}
        >
            {label}
        </button>
            
        
    )
}

export default Button