import React from 'react'
import './_workPlanRepair.scss'

import WorkPlanItem from '../../components/WorkPlanItem/WorkPlanItem';
import ButtonBlack from '../../components/Buttons/ButtonBlack'
import data from '../../utils/data/data';

const WorkPlanRepair = () => {
    return (
        <>
            <div className="workPlanRepair">
                <div className="workPlanRepair__line">
                    <hr />
                </div>
                <div className="workPlanRepair__wrapper">
                    {data?.etapRepair.map((etapItem, index) => (
                        <WorkPlanItem key={index} icon={etapItem.image} title={etapItem.title} context={etapItem.text} />
                    ))}
                    <div className="workPlanRepair__button">
                        <ButtonBlack title={"Почати"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkPlanRepair