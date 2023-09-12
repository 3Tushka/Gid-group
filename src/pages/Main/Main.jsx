import React from 'react'
import Header from '../../containers/Header/Header'
import AdditionalInfo from '../../containers/AdditionalInfo/AdditionalInfo'
import MainPriceContainer from '../../containers/MainPriceContainer/MainPriceContainer'
import MainFavour from '../../containers/MainFavour/MainFavour'
import WorkPlan from '../../containers/WorkPlan/WorkPlan'
import Coach from '../../containers/Coach/Coach'
import InstagramBlogGallery from '../../containers/InstagramBlogGallery/InstagramBlogGallery'
import Footer from '../../components/Footer/Footer'
import FormCatalog from '../../containers/FormCatalog/FormCatalog'
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle'
import Quiz from '../../containers/Quiz/Quiz'
import MainProjects from '../../containers/MainProjects/MainProjects'

export const Main = () => {
    return (
        <>
            <Header />
            <AdditionalInfo />
            <MainPriceContainer />
            <MainFavour />
            <ContainerTitle title={"Наші проекти"} />
            <MainProjects />
            <WorkPlan />
            <Coach />
            <InstagramBlogGallery />
            <ContainerTitle title={"Отримайте каталог наших проектів"} />
            <FormCatalog />
            <Footer />
        </>
    )
}