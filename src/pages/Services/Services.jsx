import React, { useState } from 'react'

import './_services.scss'

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import ServicesDesign from './ServicesDesign/ServicesDesign';
import ServicesRepair from './ServicesRepair/ServicesRepair';

export const Services = () => {
    const [active, setActive] = useState("servicesDesign")

    return (
        <>
            <Navbar />
            <div className="services">
                <div className="services-breadcrumbs">
                    <Breadcrumbs aria-label="Послуги">
                        <Link to="/Main">
                            Головна
                        </Link>
                        <Typography color="text.primary">Послуги</Typography>
                    </Breadcrumbs>
                </div>
                <div className="services__button-box">
                    <button className='services__button-box__button' onClick={() => setActive("servicesDesign")}>3D-Дизайн</button>

                    <button className='services__button-box__button' onClick={() => setActive("servicesRepair")}>Ремонт</button>
                </div>

                <div className="services__content">
                    {active === "servicesDesign" && <ServicesDesign cardIndex={0} />}
                    {active === "servicesRepair" && <ServicesRepair cardIndex={1} />}
                </div>
            </div >
            <Footer />
        </>
    )
}