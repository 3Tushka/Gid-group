/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import './_mainPriceContainer.scss';
import ButtonBlack from '../../components/Buttons/ButtonBlack';
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';

import CloseIcon from '@mui/icons-material/Close';
import Quiz from '../../containers/Quiz/Quiz'

const MainPriceContainer = () => {

    const [toggleQuiz, setToggleQuiz] = useState(false);

    return (
        <>
            <ContainerTitle title={"Ціна проекту"} />
            <div className="mPrice">
                <div className="mPrice__container">
                    <div className="mPrice__container__title">
                        <h3>
                            Дізнайтесь ціну дизайн-проекту, відповивши на 3 питання
                        </h3>
                    </div>
                    <div className="mPrice__container__text">
                        <span>
                            Пройдіть короткий тест, дійзнайтесь ціну, отримайте консультації по майбутньому проекту
                        </span>
                    </div>

                    <div className="mPrice__container__testButton" onClick={() => setToggleQuiz(true)}>
                        <ButtonBlack title={"Дізнайте ціну"} />
                    </div>
                </div>
                <div className="mPrice__quiz">

                    {toggleQuiz && (
                        <div className="mPrice__quiz__overlay">
                            <div className="mPrice__quiz__overlay__content">
                                <div className="quiz-close">
                                    <CloseIcon style={{ color: '#000' }} onClick={() => setToggleQuiz(false)} className="close-icon" />
                                </div>
                                <Quiz />
                            </div>
                        </div>
                    )}
                </div>
                <div className="mPrice__container">
                    <div className="mPrice__container__svgFigure">
                        <svg xmlns="http://www.w3.org/2000/svg" width="607" height="333" viewBox="0 0 607 333" fill="none">
                            <path d="M0 126.338L291.945 0V126.338H461.345V177.568H607L259.719 333H0V126.338Z" fill="#0E0E0E" />
                        </svg>
                    </div>
                    <div className="mPrice__container__bonuses">
                        <div className="mPrice__bonusesTitle">
                            <h4>Бонуси:</h4>
                        </div>
                        <ol className="mPrice__list">
                            <li className="mPrice__list__item">
                                <span>Чек лист на 5 помилок у будівництві</span>
                            </li>
                            <div className="mPrice__list__line" />
                            <li className="mPrice__list__item">
                                <span>5 трендів 2023 року на дизайн інтер'єру</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPriceContainer