import React from 'react'
import Header from '../../containers/Header/Header'
import AdditionalInfo from '../../containers/AdditionalInfo/AdditionalInfo'
import MainPriceContainer from '../../containers/MainPriceContainer/MainPriceContainer'
import MainFavour from '../../containers/MainFavour/MainFavour'
import WorkPlan from '../../containers/WorkPlan/WorkPlan'
import Coach from '../../containers/Coach/Coach'

export const Main = () => {
    return (
        <>
            <Header />
            <AdditionalInfo />
            <MainPriceContainer />
            <MainFavour />
            <WorkPlan />
            <Coach />
        </>
    )
}