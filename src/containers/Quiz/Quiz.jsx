/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

import './_quiz.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import QuestionTitle from './QuestionTitle/QuestionTitle';

import dataforinsta from './../../assets/images/instagram/dataForIntagram (1).png';


const Quiz = () => {

    const pagination = {
        clickable: true,
        renderCustom: function (current, total) {
            return current + ' of ' + total;
        }
    }

    const [message, setMessage] = useState('');
    const [selectedSquare, setSelectedSquare] = useState();
    const [selectedStyle, setSelectedStyle] = useState();
    const [selectedDeadline, setSelectedDeadline] = useState();

    function formSubmit(event) {
        event.preventDefault();
        const formRadioButtonData = { selectedSquare, selectedStyle, selectedDeadline };

        const jsonForm = JSON.stringify(formRadioButtonData, null, 8);
        console.log(jsonForm);
    }

    const handleChange = event => {
        setMessage(event.target.value);
    }

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
                        <form action='#' onSubmit={formSubmit}>
                            <SwiperSlide className='swiper-slide swiper-slide--square'>
                                <QuestionTitle number={1} text={"Який розмір вашого проекту?"} />
                                <div className="quiz__radioButtons">

                                    <div className="radioButton">
                                        <label className='radioButton__label'>від 50 до 80 м2</label>
                                        <input
                                            type="radio"
                                            name='square'
                                            value="small-square"
                                            className="radioButton__input"
                                            checked={selectedSquare}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="radioButton">
                                        <label className='radioButton__label'>від 80 до 120 м2</label>
                                        <input
                                            type="radio"
                                            name='square'
                                            value="medium-square"
                                            className="radioButton__input"
                                            checked={selectedSquare}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="radioButton">
                                        <label className='radioButton__label'>від 120 м2</label>
                                        <input
                                            type="radio"
                                            name='square'
                                            value="large-square"
                                            className="radioButton__input"
                                            checked={selectedSquare}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-slide swiper-slide--style'>
                                <QuestionTitle number={2} text={"Який стиль проекту вам найкраще підходить?"} />
                                <div className="quiz__styleButtons">

                                    <div className="style">
                                        <label className='style__label'>
                                            <input
                                                type="radio"
                                                name='style'
                                                value="style-minimalizm"
                                                className="style__input"
                                                checked={selectedStyle}
                                                onChange={handleChange}
                                            />
                                            <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                            <span>Мінімалізм</span>
                                        </label>
                                    </div>

                                    <div className="style">
                                        <label className='style__label'>
                                            <input
                                                type="radio"
                                                name='style'
                                                value="style-scandinavian"
                                                className="style__input"
                                                checked={selectedStyle}
                                                onChange={handleChange}
                                            />
                                            <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                            <span>Скандинавський стиль</span>
                                        </label>
                                    </div>


                                    <div className="style">
                                        <label className='style__label'>
                                            <input
                                                type="radio"
                                                name='style'
                                                value="style-loft"
                                                className="style__input"
                                                checked={selectedStyle}
                                                onChange={handleChange}
                                            />
                                            <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                            <span>Стиль Лофт</span>
                                        </label>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-slide swiper-slide--deadline'>
                                <QuestionTitle number={3} text={"Коли плануєте розпочати роботи над проектом?"} />

                                <div className="quiz__deadlineButtons" role='group'>

                                    <div className="deadline">
                                        <label className='deadline__label'>Вже потрібно розпочати</label>
                                        <input
                                            type="radio"
                                            name='deadline'
                                            id="deadline-now"
                                            value="deadline-now"
                                            className="deadline__input"
                                            checked={selectedDeadline}
                                            onChange={handleChange} />
                                    </div>

                                    <div className="deadline">
                                        <label className='deadline__label'>Протягом тижня</label>
                                        <input
                                            type="radio"
                                            name='deadline'
                                            id="deadline-week"
                                            value="deadline-week"
                                            className="deadline__input"
                                            checked={selectedDeadline}
                                            onChange={handleChange} />
                                    </div>


                                    <div className="deadline">
                                        <label className='deadline__label'>Протягом місяця</label>
                                        <input
                                            type="radio"
                                            name='deadline'
                                            id="deadline-month"
                                            value="deadline-month"
                                            className="deadline__input"
                                            checked={selectedDeadline}
                                            onChange={handleChange} />
                                    </div>

                                    <div className="deadline">
                                        <label className='deadline__label'>Більше трьох місяців</label>
                                        <input
                                            type="radio"
                                            name='deadline'
                                            id="deadline-few-months"
                                            value="deadline-few-months"
                                            className="deadline__input"
                                            checked={selectedDeadline}
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='swiper-slide swiper-slide--final'>
                                <button type='submit'>SUBMIT</button>
                            </SwiperSlide>
                        </form>
                    </div>

                </Swiper >
                <div className="quiz__buttons">
                    <div id="prevElement" className="swiper-button-prev">Назад</div>
                    <div id="nextElement" className="swiper-button-next">Далі</div>
                </div>
            </div>
        </>
    )
}

export default Quiz