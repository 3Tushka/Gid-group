import React from 'react'

import './_workPlanDesign.scss'

import data from '../../utils/data/data'

const WorkPlanDesign = () => {
    return (
        <div className="workPlanDesign">
            <div className="workPlanDesign__wrapper">
                {data?.workPlanDesign.map((workPlanDesignItem, index) => (
                    <div className="workPlanDesign__item" key={index}>
                        <div className="workPlanDesign__header">
                            <div className="workPlanDesign__image">
                                <img src={workPlanDesignItem.image} alt="workDesign-image" />
                            </div>
                            <div className="workPlanDesign__title">
                                {workPlanDesignItem.title}
                            </div>
                        </div>
                        <div className="workPlanDesign__content">
                            <span>
                                {workPlanDesignItem.content}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkPlanDesign