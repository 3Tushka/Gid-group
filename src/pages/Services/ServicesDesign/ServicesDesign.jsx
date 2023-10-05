import React from 'react'

import data from '../../../utils/data/data'
import './_servicesDesign.scss'

const ServicesDesign = () => {
    return (
        <>
            <div className="serviceDesign">
                {data?.servicesDesign?.map((serviceDesignItem, index) => (
                    <div className="serviceDesign__item" key={index}>
                        <div className="serviceDesign__title">
                            <span>{serviceDesignItem.title}</span>
                        </div>
                        <div className="serviceDesign__text">
                            <span>{serviceDesignItem.text}</span>
                        </div>
                        <div className="serviceDesign__image">
                            <img src={serviceDesignItem.image} alt="service-design-img" loading='lazy' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServicesDesign