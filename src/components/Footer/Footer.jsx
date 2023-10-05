import React from 'react';
import './_footer.scss';

import FooterLogo from '../../assets/svg/Logo.svg';
import SocialMedia from '../SocialMedia/SocialMedia';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer__upper">
                <div className="footer__upper__bigTriangle" />
                <div className="footer__upper__smallerBox">
                    <div className="footer__upper__smallerBox__triangle" />
                </div>
                <div className="footer__upper__upButton">
                    <button className='buttonTop' onClick={scrollToTop}>
                        <span>Наверх</span> <ArrowForwardIcon fontSize='large' />
                    </button>
                </div>
            </div>

            <div className="footer__socials">
                <div className="footer__logo">
                    <img src={FooterLogo} alt="footer-logo" loading='lazy' />
                </div>
                <div className="footer__socialLinks">
                    <SocialMedia />
                </div>
            </div>

            <div className="footer__links">
                <div className="footer__list">
                    <ul className="footer__column">
                        <div className="footer__column__title">
                            <span>Компанія Gid</span>
                        </div>
                        <li className="footer__item">
                            <a href=""><span>Про Нас</span></a>
                        </li>
                        <li className="footer__item">
                            <Link to="/OurTeam">Наша команда</Link>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Історія</span></a>
                        </li>
                    </ul>

                    <ul className="footer__column">
                        <div className="footer__column__title">
                            <span>Проекти</span>
                        </div>
                        <li className="footer__item">
                            <a href=""><span>Квартири</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Котеджі</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Офіси</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Ресторани</span></a>
                        </li>
                    </ul>

                    <ul className="footer__column">
                        <div className="footer__column__title">
                            <Link to="/Services">Послуги</Link>
                        </div>
                        <li className="footer__item">
                            <a href=""><span>Квартири</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Котеджі</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Офіси</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>Ресторани</span></a>
                        </li>
                    </ul>

                    <ul className="footer__column">
                        <div className="footer__column__title">
                            <Link to="/Contact">Контакти</Link>
                        </div>
                        <li className="footer__item">
                            <a href=""><span>+38-066-306-4330</span></a>
                        </li>
                        <li className="footer__item">
                            <a href=""><span>info@gid.pro</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer