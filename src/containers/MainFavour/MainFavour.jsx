import React from 'react';
import './_mainFavour.scss';
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';

import FavourDesign from '../../assets/images/design.png';
import FavourRetail from '../../assets/images/retail.png';
import FavourBuilding from '../../assets/images/buildings.png';
import FavourLandDesign from '../../assets/images/landDesign.png';

const MainFavour = () => {
    return (
        <>
            <ContainerTitle title={"Наші проекти"} />
            <div className="favours">
                <div className="favours__item">
                    <div className="favours__image">
                        <img src={FavourDesign} alt="3d-design-favour" />
                    </div>
                    <div className="favours__square" />
                    <div className="favours__content">
                        <div className="favours__title">
                            <h3>
                                3D-Дизайн
                            </h3>
                        </div>
                        <div className="favours__text">
                            <span>
                                Ідейні бачення найвищого порядку, а також залучення сучасних методик, забезпечує актуальність міркувань.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="favours__item">
                    <div className="favours__image">
                        <img src={FavourRetail} alt="retail-favour" />
                    </div>
                    <div className="favours__square" />
                    <div className="favours__content">
                        <div className="favours__title">
                            <h3>
                                Ремонт
                            </h3>
                        </div>
                        <div className="favours__text">
                            <span>
                                Ми змушені відштовхуватись від того, що глибокий рівень занурення допускає впровадження своєчасного виконання надзавдання.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="favours__item">
                    <div className="favours__image">
                        <img src={FavourBuilding} alt="building-favour" />
                    </div>
                    <div className="favours__content">
                        <div className="favours__square" />
                        <div className="favours__title">
                            <h3>
                                Будівництво
                            </h3>
                        </div>
                        <div className="favours__text">
                            <span>
                                Ми змушені відштовхуватись від того, що глибокий рівень занурення допускає впровадження своєчасного виконання надзавдання.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="favours__item">
                    <div className="favours__image">
                        <img src={FavourLandDesign} alt="landDesign-favour" />
                    </div>
                    <div className="favours__square" />
                    <div className="favours__content">
                        <div className="favours__title">
                            <h3>
                                Ландшафтний дизайн
                            </h3>
                        </div>
                        <div className="favours__text">
                            <span>
                                Ідейні бачення найвищого порядку, а також залучення сучасних методик, забезпечує актуальність міркувань.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFavour