import React from 'react'
import './_buttonBlack.scss';

const ButtonBlack = ({ title }) => {
    return (
        <button className='buttonBlack'>
            {title}
        </button>
    )
}

export default ButtonBlack