import React from 'react'
import Video from '../../containers/Video/Video';
import Footer from '../../components/Footer/Footer';
import FormCatalog from '../../containers/FormCatalog/FormCatalog';
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';
import AdditionalInfoRepair from '../../containers/AdditionalInfo/AdditionalInfoRepair/AdditionalInfoRepair';
import Offers from '../../containers/Offers/Offers';

export const Repairement = () => {
    return (
        <>
            <Video />
            <AdditionalInfoRepair />
            <ContainerTitle title={"Основні послуги"} />
            <Offers />
            <ContainerTitle title={"Ще не готові замовити ремонт?"} />
            <FormCatalog />
            <Footer />
        </>
    )
}
