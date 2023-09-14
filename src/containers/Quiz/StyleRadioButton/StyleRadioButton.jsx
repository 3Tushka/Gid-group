import React from 'react'
import './_styleRadioButton.scss'

const StyleRadioButton = ({ label, id, value, image }) => {
    return (
        <div className="style">
            <label className='style__label'>
                <input type="radio" name='style' id={id} value={value} className="style__input" />
                <img src={image} alt="quiz-style-image" loading='lazy' className='style__image' />
                <span>{label}</span>
            </label>
        </div>
    )
}
export default StyleRadioButton