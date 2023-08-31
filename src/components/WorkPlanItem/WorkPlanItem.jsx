import React from 'react'
import './_workPlanItem.scss';

import CheckIcon from '@mui/icons-material/Check';

const WorkPlanItem = ({ title, icon, context, littleText, subIcon }) => {
    return (
        <>
            <div className="workPlanItem">
                <div className="workPlanItem__image">
                    <img src={icon} alt="planItem-Image" />
                </div>
                <div className="workPlanItem__title">
                    <h4>{title}</h4>
                </div>
                <div className="workPlanItem__context">
                    <span>{context}</span>
                </div>
                <div className="workPlanItem__subtext">

                    <a href=""><span>{littleText}</span></a>
                </div>
            </div>
        </>
    )
}

export default WorkPlanItem