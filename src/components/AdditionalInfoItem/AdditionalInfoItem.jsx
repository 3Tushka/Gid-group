import React from 'react';
import './_additionalInfo.scss';

const AdditionalInfoItem = ({ titleNumber, title, content }) => {
    return (
        <div className="addInfo">
            <div className="addInfo__titleNumber">
                <span>{titleNumber}</span>
            </div>
            <div className="addInfo__title">
                <h5>{title}</h5>
            </div>
            <div className="addInfo__content">
                <span>{content}</span>
            </div>
        </div>
    )
}

export default AdditionalInfoItem;