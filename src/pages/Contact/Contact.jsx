import React from 'react'
import './_contact.scss';

import Navbar from '../../components/Navbar/Navbar';

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Link } from 'react-router-dom';

import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Footer from '../../components/Footer/Footer';
import ContactMap from '../../components/ContactMap/ContactMap';
import FormContact from '../../containers/FormContact/FormContact';


export const Contact = () => {
    return (
        <>
            <Navbar />

            <div className="contact">
                <div className="contact-breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/Main">
                            Головна
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                </div>

                <div className="contact__wrapper">
                    <div className="contact__main-title">
                        <h2>Контакти</h2>
                    </div>

                    <div className="contact__container">
                        <div className="contact__column">
                            <div className="contact__email">
                                <div className="contact__title">
                                    <span>Email:</span>
                                </div>
                                <div className="contact__content">
                                    <a href="">gidGroupEmail@gid.group</a>
                                </div>
                            </div>

                            <div className="contact__phone">
                                <div className="contact__title">
                                    <span>Телефон:</span>
                                </div>
                                <ul className="contact__phone-list">
                                    <li className="contact__phone-list--item">
                                        +380 (66) 306 4330
                                    </li>
                                    <li className="contact__phone-list--item">
                                        +380 (66) 306 4312
                                    </li>
                                    <li className="contact__phone-list--item">
                                        +380 (66) 306 4367
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact__column">
                            <div className="contact__title">
                                <span>Офіс: </span>
                            </div>
                            <div className="contact__content">
                                бул Павла Вірського, 53/98, к. 41, 04111, Київ, Україна
                            </div>
                        </div>
                        <div className="contact__column">
                            <div className="contact__title">
                                Ми в соціальних мережах:
                            </div>
                            <div className="contact__social">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <FormContact />
            <ContactMap />
            <Footer />
        </>
    )
}