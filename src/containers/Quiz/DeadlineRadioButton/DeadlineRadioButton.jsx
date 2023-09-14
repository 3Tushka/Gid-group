import React from 'react'
import './_deadline.scss'

const DeadlineRadioButton = ({ htmlFor, label, id, value }) => {
    return (
        <div className="deadline">
            <label htmlFor={htmlFor} className='deadline__label'>{label}</label>
            <input type="radio" name='deadline' id={id} value={value} className="deadline__input" />
        </div>
    )
}

export default DeadlineRadioButton