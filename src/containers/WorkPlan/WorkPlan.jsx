import React from 'react'
import './_workPlan.scss';
import WorkPlanItem from '../../components/WorkPlanItem/WorkPlanItem';
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle.jsx';

import WorkPlanPaint from '../../assets/svg/WorkPlanPaint.svg';
import WorkPlanLine from '../../assets/svg/WorkPlanLine.svg';
import WorkPlanHouse from '../../assets/svg/WorkPlanHouse.svg';
import WorkPlanCalc from '../../assets/svg/WorkPlanCalc.svg';
import WorkPlanPencile from '../../assets/svg/WorkPlanPencile.svg';
import WorkPlanList from '../../assets/svg/WorkPlanList.svg';

const WorkPlan = () => {
    return (
        <>
            <ContainerTitle title={"6 Етапів. Від заяви до здачі готового об'єкту"} />
            <div className="workPlan">
                <div className="workPlan__wrapper">
                    <WorkPlanItem title={"Заява"} icon={WorkPlanList} context={"Лишайте заяву на сайті та отримуйте 2 варіанти планування "} littleText={"Лишити заяву"} />
                    <WorkPlanItem title={"Дизайн"} icon={WorkPlanLine} context={"Збирайте на сайті стиль з чотирьох готових варіантів "} littleText={"Обрати дизайн"} />
                    <WorkPlanItem title={"Розрахунок"} icon={WorkPlanCalc} context={"Розраховуйте фінансову ціну ремонту"} littleText={"Рахувати"} />
                    <WorkPlanItem title={"Договір"} icon={WorkPlanPencile} context={"Підпишіть договір з перевіриним юристом"} littleText={"Лишити заяву"} />
                    <WorkPlanItem title={"Ремонт"} icon={WorkPlanPaint} context={"Зможемо відремонтувати все що завгодно"} littleText={"Лишити заяву"} />
                    <WorkPlanItem title={"Виконання"} icon={WorkPlanHouse} context={"Отримайте квартиру під гарантії"} />
                </div>
            </div>
        </>
    )
}

export default WorkPlan