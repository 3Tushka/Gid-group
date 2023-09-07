/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './_result.scss'

import HouseSvg from '../../assets/svg/result (1).svg';
import sandClockSvg from '../../assets/svg/result (2).svg';
import awardSvg from '../../assets/svg/result (3).svg';
import likeSvg from '../../assets/svg/result (4).svg';

const Result = () => {
    return (
        <>
            <div className="result">
                <div className="result__wrapper">
                    <div className="result__item">
                        <div className="result__image">
                            <img src={HouseSvg} alt="result-house-svg" />
                        </div>
                        <div className="result__text">
                            <span>
                                Повністю готовий ремонт “під ключ”
                                (з урахуванням всіх термінів і бюджету)
                            </span>
                        </div>
                    </div>
                    <div className="result__item">
                        <div className="result__image">
                            <img src={sandClockSvg} alt="result-sandClock-svg" />
                        </div>
                        <div className="result__text">
                            <span>Збережені час та нерви</span>
                        </div>
                    </div>
                    <div className="result__item">
                        <div className="result__image">
                            <img src={awardSvg} alt="result-award-svg" />
                        </div>
                        <div className="result__text">
                            <span>Гарантія на ремонт 6 років</span>
                        </div>
                    </div>
                    <div className="result__item">
                        <div className="result__image">
                            <img src={likeSvg} alt="result-like-svg" />
                        </div>
                        <div className="result__text">
                            <span>Рекомендації друзів</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result