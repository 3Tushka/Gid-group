/* eslint-disable react/jsx-key */
import React from 'react'

import './_quiz.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SquareRadioButton from './SquareRadioButton/SquareRadioButton';
import QuestionTitle from './QuestionTitle/QuestionTitle';
import DeadlineRadioButton from './DeadlineRadioButton/DeadlineRadioButton';
import StyleRadioButton from './StyleRadioButton/StyleRadioButton';

import dataforinsta from './../../assets/images/instagram/dataForIntagram (1).png';


const Quiz = () => {

    const pagination = {
        clickable: true,
        renderCustom: function (current, total) {
            return current + ' of ' + total;
        }
    };

    return (
        <>
            <div className="quiz">
                <Swiper pagination={pagination}
                    navigation={{
                        nextEl: "#nextElement",
                        prevEl: "#prevElement"
                    }}
                    modules={[Pagination, Navigation]} className='mySwiper'>

                    <div className="swiper-wrapper">
                        <form name='quiz'>
                            <SwiperSlide className='swiper-slide swiper-slide--square'>
                                <QuestionTitle number={1} text={"Який розмір вашого проекту?"} />
                                <div className="quiz__radioButtons">
                                    <SquareRadioButton htmlFor={"small-square"} label={"від 50 до 80 м2"} value={"small-square"} id={"small-square-id"} />

                                    <SquareRadioButton htmlFor={"medium-square"} label={"від 80 до 120 м2"} value={"medium-square"} id={"medium-square-id"} />

                                    <SquareRadioButton htmlFor={"large-square"} label={"від 120 м2"} value={"large-square"} id={"large-square-id"} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-slide swiper-slide--style'>
                                <QuestionTitle number={2} text={"Який стиль проекту вам найкраще підходить?"} />
                                <div className="quiz__styleButtons">
                                    <StyleRadioButton image={dataforinsta} label={"Мінімалізм"} id="style-minimalizm" value={"style-minimalizm"} />
                                    <StyleRadioButton image={dataforinsta} label={"Скандинавський стиль"} id="style-scandinavian" value={"style-scandinavian"} />
                                    <StyleRadioButton image={dataforinsta} label={"Стиль Лофт"} id="style-loft" value={"style-loft"} />
                                    <StyleRadioButton image={dataforinsta} label={"Мінімалізм"} id="style-minimalizm" value={"style-minimalizm"} />
                                    <StyleRadioButton image={dataforinsta} label={"Скандинавський стиль"} id="style-scandinavian" value={"style-scandinavian"} />
                                    <StyleRadioButton image={dataforinsta} label={"Стиль Лофт"} id="style-loft" value={"style-loft"} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-slide swiper-slide--deadline'>
                                <QuestionTitle number={3} text={"Коли плануєте розпочати роботи над проектом?"} />

                                <div className="quiz__deadlineButtons">
                                    <DeadlineRadioButton htmlFor={"deadline"} id={"deadline-now"} value={"deadline-now"} label={"Вже потрібно розпочати"} />

                                    <DeadlineRadioButton htmlFor={"deadline"} id={"deadline-week"} value={"deadline-week"} label={"Протягом тижня"} />

                                    <DeadlineRadioButton htmlFor={"deadline"} id={"deadline-month"} value={"deadline-month"} label={"Протягом місяця"} />

                                    <DeadlineRadioButton htmlFor={"deadline"} id={"deadline-few-months"} value={"deadline-few-months"} label={"Більше трьох місяців"} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-slide swiper-slide--final'>
                                Final
                            </SwiperSlide>
                        </form>
                    </div>

                </Swiper >
                <div id="prevElement" className="swiper-button-prev">Назад</div>
                <div id="nextElement" className="swiper-button-next">Далі</div>
            </div>
        </>
    )
}

export default Quiz