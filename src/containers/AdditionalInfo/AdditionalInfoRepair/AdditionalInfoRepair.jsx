import React from 'react'
import AdditionalInfoItem from '../../../components/AdditionalInfoItem/AdditionalInfoItem'
import data from '../../../utils/data/data'

const AdditionalInfoRepair = () => {
    return (
        <>
            <div className="addInfo-wrapper">
                {data?.infoRepair.map((infoItem, index) => (
                    <AdditionalInfoItem key={index} titleNumber={infoItem.title} title={infoItem.content} />
                ))}
            </div>
        </>
    )
}

export default AdditionalInfoRepair