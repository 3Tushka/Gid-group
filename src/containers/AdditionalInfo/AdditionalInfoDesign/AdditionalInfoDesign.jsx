import React from 'react'
import AdditionalInfoItem from '../../../components/AdditionalInfoItem/AdditionalInfoItem'
import data from '../../../utils/data/data'

const AdditionalInfoDesign = () => {
    return (
        <div className="addInfo-wrapper">
            {data?.infoDesign.map((infoItem, index) => (
                <AdditionalInfoItem key={index} titleNumber={infoItem.title} title={infoItem.content} />
            ))}
        </div>
    )
}

export default AdditionalInfoDesign