import React from 'react'
import Footer from '../../components/Footer/Footer';
import FormCatalog from '../../containers/FormCatalog/FormCatalog';
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';
import Team from '../../containers/Team/Team';
import Result from '../../containers/Result/Result';
import FeedbackSlider from '../../containers/FeedbackSlider/FeedbackSlider';
import FinishedProjectsSlider from '../../containers/FinishedProjectsSlider/FinishedProjectsSlider';
import RepairBlog from '../../containers/RepairBlog/RepairBlog';
import Navbar from '../../components/Navbar/Navbar';
import AdditionalInfoDesign from '../../containers/AdditionalInfo/AdditionalInfoDesign/AdditionalInfoDesign';
import MainPriceContainer from '../../containers/MainPriceContainer/MainPriceContainer';
import Coach from '../../containers/Coach/Coach';
import TargetAudience from '../../containers/TargetAudience/TargetAudience';
import WorkPlanDesign from '../../containers/WorkPlanDesign/WorkPlanDesign';

export const Design = () => {
    return (
        <>
            <Navbar />
            <AdditionalInfoDesign />
            <MainPriceContainer />
            <FinishedProjectsSlider />
            <ContainerTitle title={"Як ми працюємо"} />
            <WorkPlanDesign />
            <ContainerTitle title={"Для кого це"} />
            <TargetAudience />
            <Coach />
            <ContainerTitle title={"Результат"} />
            <Result />
            <ContainerTitle title={"Відгуки"} />
            <FeedbackSlider />
            <ContainerTitle title={"Наш блог"} />
            <RepairBlog />
            <ContainerTitle title={"Наша команда"} />
            <Team />
            <ContainerTitle title={"Ще не готові замовити ремонт?"} />
            <FormCatalog />
            <Footer />
        </>
    )
}
