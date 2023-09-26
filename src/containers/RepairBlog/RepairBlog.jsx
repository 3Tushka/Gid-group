import React from 'react'

import './_repairBlog.scss'
import RepairBlogItem from './repairBlogItem/repairBlogItem'

import arrow from '/src/assets/svg/Arrow-rigth.svg'

const RepairBlog = () => {
    return (
        <>
            <div className="repair-blog">
                <div className="repair-blog__wrapper">
                    <div className="repair-blog__container">
                        <RepairBlogItem date={"02.05.2023"} title={"Як виявити компетенцію дизайнера нічого не знаючи про дизайн інтер'єру?"} content={"Сьогодні питання професійної підготовки дизайнерів акутальне як ніколи. Існує багато..."} />
                        <RepairBlogItem date={"02.05.2023"} title={"Як виявити компетенцію дизайнера нічого не знаючи про дизайн інтер'єру?"} content={"Сьогодні питання професійної підготовки дизайнерів акутальне як ніколи. Існує багато..."} />
                    </div>
                    <div className='repair-blog__line' />
                    <div className="repair-blog__container">
                        <RepairBlogItem date={"02.05.2023"} title={"Як виявити компетенцію дизайнера нічого не знаючи про дизайн інтер'єру?"} content={"Сьогодні питання професійної підготовки дизайнерів акутальне як ніколи. Існує багато..."} />
                        <RepairBlogItem date={"02.05.2023"} title={"Як виявити компетенцію дизайнера нічого не знаючи про дизайн інтер'єру?"} content={"Сьогодні питання професійної підготовки дизайнерів акутальне як ніколи. Існує багато..."} />
                    </div>
                </div>
                <div className="repair-blog__link-button">
                    <button onClick={"location.href='' "} type='button'>
                        <span>Перейти в блог</span>
                        <img src={arrow} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default RepairBlog