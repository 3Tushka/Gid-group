import React from 'react'
import './_teamItem.scss'


const TeamItem = ({ name, image, position, text }) => {
    return (
        <>
            <div className="teamItem">
                <div className="teamItem__image">
                    <img src={image} alt="teamItem-image" />
                </div>
                <div className="teamItem__content">
                    <div className="teamItem__name">
                        <h2>{name}</h2>
                    </div>
                    <div className="teamItem__position">
                        <span>{position}</span>
                    </div>
                    <div className="teamItem__text">
                        <span>{text}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamItem