import React from 'react';
import './_additionalInfo.scss';
import AdditionalInfoItem from '../../components/AdditionalInfoItem/AdditionalInfoItem';

const AdditionalInfo = () => {
    return (
        <>
            <div className="addInfo-wrapper">
                <AdditionalInfoItem titleNumber={"100+"} title={"Реалізовані проекти"} content={"Працюємо з будь-якою нерухомістю"} />
                <AdditionalInfoItem titleNumber={"10 років"} title={"Чудова репутація"} content={"Наші спеціалісти постійно навчаються у лідерів будівельних робіт"} />
                <AdditionalInfoItem titleNumber={"3 роки"} title={"Гарантія на всі роботи"} content={"Ми уважно вивчаємо ринок матеріалів та інноваційних технологій"} />
                <AdditionalInfoItem titleNumber={"Терміни"} title={"Процес"} content={"Потрібне найкраще - замов у найкращих!"} />
            </div>
        </>
    )
}

export default AdditionalInfo