import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';

import './_navbar.scss';

import NavLogo from '../../assets/svg/Logo.svg';

const LinksMenu = () => (
    <>
        <li><Link to="/Main">Головна</Link></li>
        <li><Link to="/Design">3D-Дизайн</Link></li>
        <li><Link to="/Repairement">Ремонт</Link></li>
        <li><Link to="/Buildings">Будівництво</Link></li>
        <li><Link to="/Projects">Проекти</Link></li>
        <li><Link to="/LandscapeDesign">Ландшафтний Дизайн</Link></li>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='navbar'>
            <div className="navbar__box">
                <div className="navbar__toggleMenu">
                    <MenuIcon fontSize='large' style={{ color: '#fff' }} onClick={() => setToggleMenu(true)} className="burger-icon" />

                    {toggleMenu && (
                        <div className="navbar__toggleMenu_overlay">
                            <div className="overlay-box">
                                <div className="navbar-close">
                                    <CloseIcon fontSize='large' style={{ color: '#fff' }} onClick={() => setToggleMenu(false)} className="close-icon" />
                                </div>
                            </div>
                            <div className="navbar-content">
                                <ul className="navbar-content__links">
                                    <LinksMenu />
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="navbar__logo">
                <img src={NavLogo} alt="nav-logo" />
            </div>

            <div className="navbar__contactPhone">
                <PhoneIcon fontSize="large" style={{ color: '#fff' }} />
            </div>
        </nav>
    )
}

export default Navbar