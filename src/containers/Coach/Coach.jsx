import React from 'react'
import './_coach.scss';

const Coach = () => {
    return (
        <>
            <div className="coach">
                <div className="coach__wrapper">
                    <div className="coach__title">
                        <span>Ми там де:</span>
                    </div>
                    <ul className="coach__list">
                        <li className="coach__item">
                            <span>Потрібні високі якості ремонтних робіт</span>
                        </li>
                        <li className="coach__item">
                            <span>Потрібно дотриматись Бюджету </span>
                        </li>
                        <li className="coach__item">
                            <span>Необхідна відповідальна робота</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Coach