/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './_result.scss'
import data from '../../utils/data/data';

const Result = () => {
    return (
        <>
            <div className="result">
                <div className="result__wrapper">
                    {data?.resultData.map((resultItem, index) => (
                        <div className="result__item" key={index}>
                            <div className="result__image">
                                <img src={resultItem.image} alt="result-svg" />
                            </div>
                            <div className="result__text">
                                <span>
                                    {resultItem.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Result