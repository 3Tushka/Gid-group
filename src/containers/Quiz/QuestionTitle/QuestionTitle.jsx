import React from 'react'

import './_questionTitle.scss'

const QuestionTitle = ({ number, text }) => {
    return (
        <div className="questionTitle">
            <h2 className='questionTitle__h2'>Питання {number}:</h2>
            <span className='questionTitle__text'>{text}</span>
        </div>
    )
}

export default QuestionTitle