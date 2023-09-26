import React from 'react'
import './_feedBackSlideItem.scss'

const FeedBackSlideItem = ({ image, avatarName, avatarDesc, avatarText, feedbackContent, feedbackImage }) => {
    return (
        <div className='slide-item'>
            <div className="slide-item__container">
                <div className="slide-item__avatar">
                    <div className="slide-item__image">
                        <img src={image} alt="slide-avatar-image" loading='lazy' />
                    </div>
                    <div className="slide-item__avatar-info">
                        <div className="slide-item__avatar-info__name">
                            <span>{avatarName}</span>
                        </div>
                        <div className="slide-item__avatar-info__desc">
                            <span>{avatarDesc}</span>
                        </div>
                        <div className="slide-item__avatar-info__text">
                            <span>{avatarText}</span>
                        </div>
                    </div>
                </div>

                <div className="slide-item__content">
                    <span>
                        {feedbackContent}
                    </span>
                </div>
            </div>

            <div className="slide-item__container">
                <img src={feedbackImage} alt="slide-feedback-image" loading='lazy' />
            </div>
        </div>
    )
}

export default FeedBackSlideItem