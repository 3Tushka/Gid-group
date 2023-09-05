import React from 'react'
import AdditionalInfoItem from '../../../components/AdditionalInfoItem/AdditionalInfoItem'


const AdditionalInfoRepair = () => {
    return (
        <>
            <div className="addInfo-wrapper">
                <AdditionalInfoItem titleNumber={"24/7"} title={"Ваш менеджер завжди на зв'язку"} />
                <AdditionalInfoItem titleNumber={"Нагляд"} title={"На будівництві ведеться цілодобовий нагляд"} />
                <AdditionalInfoItem titleNumber={"7 років"} title={"Гарантії на всі роботи"} />
                <AdditionalInfoItem titleNumber={"Документація"} title={"Підготуємо та затвердимо проектну документацію"} />
            </div>
        </>
    )
}

export default AdditionalInfoRepair