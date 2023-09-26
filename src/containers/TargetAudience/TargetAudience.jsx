import React from 'react'
import './_targetAudience.scss'

const TargetAudience = () => {
    return (
        <>
            <div className="targetAudience">
                <div className="targetAudience__wrapper">
                    <div className="targetAudience__h2">
                        <h2>Ми робимо дизайн інтер`єрів для людей, які хочуть довірити нам весь процес: дизайн-проект, ремонт, закупівлю матеріалів та меблів</h2>
                    </div>
                    <ul className="targetAudience__container">
                        <li className="targetAudience__column">
                            <div className="targetAudience__list-title">
                                <span>
                                    Для тих хто цінує естетику
                                </span>
                            </div>
                            <div className="targetAudience__list-content">
                                <span>
                                    Щорічно відвідуємо зарубіжні виставки, тому використовуємо останні світові тенденції в дизайні. Працюємо тільки з перевіреними рішеннями.
                                </span>
                            </div>
                        </li>
                        <li className="targetAudience__column">
                            <div className="targetAudience__list-title">
                                <span>
                                    Кому важлива експертність
                                </span>
                            </div>
                            <div className="targetAudience__list-content">
                                <span>
                                    В процесі роботи над дизайн-проектом ми консультуємося з досвідченими будівельниками, щоб отримати техніку
                                    реалізовані рішення.
                                </span>
                            </div>
                        </li>
                        <li className="targetAudience__column">
                            <div className="targetAudience__list-title">
                                <span>
                                    Кому потрібен контроль над процесом
                                </span>
                            </div>
                            <div className="targetAudience__list-content">
                                <span>
                                    На кожен проект призначається група з п`яти осіб. Це дозволяє виділити терміни, участь нюансів, не упустити деталі
                                    и досконально продумать інтер`єр.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TargetAudience