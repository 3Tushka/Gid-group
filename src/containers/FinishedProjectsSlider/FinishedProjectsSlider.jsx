import React from 'react'
import './_finishedProjectSlider.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';
import ProjectItem from '/src/components/ProjectItem/ProjectItem';
import data from '../../utils/data/data';

const FinishedProjectsSlider = () => {
    return (
        <>
            <div className="projectsSlider">
                <ContainerTitle title={"Виконані роботи"} />
                <Swiper navigation={true}
                    modules={[Navigation]}
                    slidesPerView={3}
                    className="projects-slider">

                    <div className="swiper-wrapper">
                        {data?.projects.map((finishedProjects, index) => (
                            <SwiperSlide key={index}>
                                <ProjectItem projectName={finishedProjects.projectName} projectImage={finishedProjects.projectImage} projectStyle={finishedProjects.projectStyle} projectSquare={finishedProjects.projectSquare} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default FinishedProjectsSlider