import React from 'react'
import './_quizSquare.scss'

import data from '../../../utils/data/data'

const QuizSquare = () => {
    return (
        <div className="question">
            <div className="question__title">
                <div className="question__questionNumber">
                    <span>Питання 1:</span>
                </div>
                <div className="question__qestion">
                    <span>Який розмір вашого проекту?</span>
                </div>
            </div>

            <form action="" className='question__options'>
                <select>
                    {data.squareOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            <div className="option__box">
                                <div className="option__box__upperArrow" />
                                <div className="option__box__content">
                                    {option.text}
                                </div>
                                <div className="option__box__sideArrow" />
                            </div>
                        </option>
                    )
                    )}
                </select>

                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}

export default QuizSquare