import React from 'react'

import './_ourTeam.scss'

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ContainerTitle from '../../components/ContainerTitle/ContainerTitle';
import Footer from '../../components/Footer/Footer';

import images from '../../utils/data/images';
import data from '../../utils/data/data';

export const OurTeam = () => {
    return (
        <>
            <Navbar />
            <div className="ourTeam">
                <div className="ourTeam-breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/Main">
                            Головна
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                </div>

                <div className="ourTeam__wrapper">
                    <div className="ourTeam__container ourTeam__container--first">
                        <div className="ourTeam__column">
                            <div className="ourTeam__title">
                                <span>Наша команда</span>
                            </div>
                            <div className="ourTeam__text">
                                <span>Ось вам яскравий приклад сучасних тенденцій
                                    - базовий вектор розвитку однозначно визначає кожного учасника,
                                    як можна приймати власні рішення, що виводять поточні активи.
                                    Приймаючи до уваги показники успішності, високотехнологічна концепція суспільного укладу не дає шансу для експериментів,
                                    що виражають свою масштабність і грандіозність!</span>
                            </div>
                            <div className="ourTeam__image">
                                <img src={images.teamLaptopHorizontal} alt="laptops-horizontal" loading='lazy' />
                            </div>
                        </div>

                        <div className="ourTeam__column">
                            <div className="ourTeam__image">
                                <img src={images.teamLaptopVertical} alt="laptops-vertical" loading='lazy' />
                            </div>
                        </div>
                    </div>

                    <div className="ourTeam__container ourTeam__container--second">
                        <div className="ourTeam__column">
                            <div className="ourTeam__title">
                                <span>Підхід</span>
                            </div>
                            <div className="ourTeam__text">
                                <span>
                                    Повсякденна практика показує, що початок повсякденної роботи з формування позицій не дає нам іншого вибору, крім визначення напрямів прогресивного розвитку! Ми вимушені відштовхуватися від того, що постійно
                                </span>
                            </div>
                        </div>

                        <div className="ourTeam__column">
                            <div className="ourTeam__image">
                                <img src={images.teamRadio} alt="team-radio" loading='lazy' />
                            </div>
                        </div>
                    </div>

                    <div className="ourTeam__container ourTeam__container--third">
                        <div className="ourTeam__column">
                            <div className="ourTeam__image">
                                <img src={images.teamLadder} alt="team-radio" loading='lazy' />
                            </div>
                            <div className="ourTeam__title">
                                <span>Реальність</span>
                            </div>

                            <div className="ourTeam__text">
                                <span>
                                    Ми вимушені відштовхнутися від того,
                                    что постійноінформаційне-
                                    пропагандистське забезпечення нашої діяльності вимагає від нас аналізу укріплення моральних цінностей. Лише дії представників оппозиції об`єктивно розглядаються окремими інстанціями.
                                </span>
                            </div>
                            <div className="ourTeam__image">
                                <img src={images.teamScrew} alt="team-radio" loading='lazy' />
                            </div>

                        </div>

                        <div className="ourTeam__column">
                            <div className="ourTeam__title">
                                <span>Реалізація</span>
                            </div>
                            <div className="ourTeam__text">
                                <span>
                                    Повсякденна практика показує, що початок повсякденної роботи з формування позицій не дає нам іншого вибору, крім визначення напрямів прогресивного розвитку! Ми вимушені відштовхуватися від того, що постійно
                                </span>
                            </div>
                            <div className="ourTeam__image">
                                <img src={images.teamBuilders} alt="team-radio" loading='lazy' />
                            </div>
                            <div className="ourTeam__image">
                                <img src={images.teamLamp} alt="team-radio" loading='lazy' />
                            </div>
                        </div>
                    </div>
                    <ContainerTitle title={"Команда"} />
                    <div className="ourTeam__employee">
                        {data?.employee?.map((employeeItem, index) => (
                            <>
                                <div className="ourTeam__employee__item" key={index}>
                                    <div className="ourTeam__employee__image">
                                        <img src={employeeItem.image} alt="employee-image" loading='lazy' />
                                    </div>
                                    <div className="ourTeam__employee__name">
                                        <span>{employeeItem.name}</span>
                                    </div>
                                    <div className="ourTeam__employee__position">
                                        <span>{employeeItem.position}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
