import React from 'react'
import './_squareRadioButton.scss'

const SquareRadioButton = ({ htmlFor, label, value, id }) => {
    return (
        <div className="radioButton">
            <label htmlFor={htmlFor} className='radioButton__label'>{label}</label>
            <input type="radio" name='square' id={id} value={value} className="radioButton__input" />
        </div>
    )
}

export default SquareRadioButton