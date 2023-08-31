import React from 'react'
import './_header.scss';
import Navbar from '../../components/Navbar/Navbar';
import ButtonBlack from '../../components/Buttons/ButtonBlack';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />

            <div className="header__wrapper">
                <div className="header__content">
                    <div className="header__title">
                        <h2>Найкраще - вам</h2>
                    </div>
                    <div className="header__buttons">
                        <ButtonBlack title={"Проекти"} />
                        <ButtonBlack title={"Розрахувати вартість"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header