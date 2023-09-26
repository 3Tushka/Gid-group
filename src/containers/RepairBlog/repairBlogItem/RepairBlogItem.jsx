import React from 'react'

import './_repairBlogItem.scss'

const RepairBlogItem = ({ date, title, content, link }) => {
    return (
        <>
            <div className="repair-blog-item">
                <div className="repair-blog-item__date">
                    <span>{date}</span>
                </div>
                <div className="repair-blog-item__title">
                    <h3>{title}</h3>
                </div>
                <div className="repair-blog-item__content">
                    <span>{content}</span>
                </div>
                <button className='repair-blog-item__button'>
                    <a href={link} className='blog-item-link'>
                        Читати повністю
                    </a>
                </button>
            </div>
        </>
    )
}

export default RepairBlogItem