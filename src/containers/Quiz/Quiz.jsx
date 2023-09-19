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

import { Formik, Field, Form } from 'formik';

const Quiz = () => {

    const pagination = {
        clickable: true,
        renderCustom: function (current, total) {
            return current + ' of ' + total;
        }
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
                        <Formik
                            className="formikForm"
                            initialValues={{
                                square: '',
                                deadline: '',
                                style: '',
                            }}

                            onSubmit={async (values, { resetForm }) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                                resetForm({ values: '' });
                            }}
                        >
                            {({ values }) => (
                                <Form>
                                    <SwiperSlide className='swiper-slide swiper-slide--square'>
                                        <QuestionTitle number={1} text={"Який розмір вашого проекту?"} />
                                        <div className="quiz__radioButtons" role="group" id='square'>
                                            <div className="radioButton">
                                                <label htmlFor="small-square" className='radioButton__label'>від 50 до 80 м2</label>
                                                <Field type="radio" name='square' id="small-square" value="small-square" className="radioButton__input" />
                                            </div>

                                            <div className="radioButton">
                                                <label htmlFor="medium-square" className='radioButton__label'>від 80 до 120 м2</label>
                                                <Field type="radio" name='square' id="medium-square" value="medium-square" className="radioButton__input" />
                                            </div>

                                            <div className="radioButton">
                                                <label htmlFor="large-square" className='radioButton__label'>від 120 м2</label>
                                                <Field type="radio" name='square' id="large-square" value="large-square" className="radioButton__input" />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className='swiper-slide swiper-slide--style'>
                                        <QuestionTitle number={2} text={"Який стиль проекту вам найкраще підходить?"} />
                                        <div className="quiz__styleButtons" role="group" id='style'>
                                            <div className="style">
                                                <label className='style__label'>
                                                    <Field type="radio" name='style' id="style-minimalizm" value="style-minimalizm" className="style__input" />
                                                    <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                                    <span>Мінімалізм</span>
                                                </label>
                                            </div>

                                            <div className="style">
                                                <label className='style__label'>
                                                    <Field type="radio" name='style' id="style-scandinavian" value="style-scandinavian" className="style__input" />
                                                    <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                                    <span>Скандинавський стиль</span>
                                                </label>
                                            </div>


                                            <div className="style">
                                                <label className='style__label'>
                                                    <Field type="radio" name='style' id="style-loft" value="style-loft" className="style__input" />
                                                    <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                                    <span>Стиль Лофт</span>
                                                </label>
                                            </div>

                                            {/* <div className="style">
                                                <label className='style__label'>
                                                    <Field type="radio" name='style' id="style-minimalizm" value="style-minimalizm" className="style__input" />
                                                    <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                                    <span>Мінімалізм</span>
                                                </label>
                                            </div>

                                            <div className="style">
                                                <label className='style__label'>
                                                    <Field type="radio" name='style' id="style-scandinavian" value="style-scandinavian" className="style__input" />
                                                    <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                                    <span>Скандинавський стиль</span>
                                                </label>
                                            </div>


                                            <div className="style">
                                                <label className='style__label'>
                                                    <Field type="radio" name='style' id="style-loft" value="style-loft" className="style__input" />
                                                    <img src={dataforinsta} alt="quiz-style-image" loading='lazy' className='style__image' />
                                                    <span>Стиль Лофт</span>
                                                </label>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className='swiper-slide swiper-slide--deadline'>
                                        <QuestionTitle number={3} text={"Коли плануєте розпочати роботи над проектом?"} />

                                        <div className="quiz__deadlineButtons" role='group'>

                                            <div className="deadline">
                                                <label htmlFor="deadline-now" className='deadline__label'>Вже потрібно розпочати</label>
                                                <Field type="radio" name='deadline' id="deadline-now" value="deadline-now" className="deadline__input" />
                                            </div>

                                            <div className="deadline">
                                                <label htmlFor="deadline-week" className='deadline__label'>Протягом тижня</label>
                                                <Field type="radio" name='deadline' id="deadline-week" value="deadline-week" className="deadline__input" />
                                            </div>


                                            <div className="deadline">
                                                <label htmlFor="deadline-month" className='deadline__label'>Протягом місяця</label>
                                                <Field type="radio" name='deadline' id="deadline-month" value="deadline-month" className="deadline__input" />
                                            </div>

                                            <div className="deadline">
                                                <label htmlFor="deadline-few-months" className='deadline__label'>Більше трьох місяців</label>
                                                <Field type="radio" name='deadline' id="deadline-few-months" value="deadline-few-months" className="deadline__input" />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className='swiper-slide swiper-slide--final'>
                                        <button type='submit'>SUBMIT</button>
                                    </SwiperSlide>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </Swiper >
                <div id="prevElement" className="swiper-button-prev">Назад</div>
                <div id="nextElement" className="swiper-button-next">Далі</div>
            </div>
        </>
    )
}

export default Quiz