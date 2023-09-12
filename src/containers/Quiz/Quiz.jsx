/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

import './_quiz.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


const Quiz = () => {

    const pagination = {
        clickable: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

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
                        <SwiperSlide className='swiper-slide swiper-slide--square'>
                            Square
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide swiper-slide--style'>
                            Style
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide swiper-slide--deadline'>
                            Deadline
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide swiper-slide--final'>
                            Final
                        </SwiperSlide>
                    </div>
                </Swiper >
                <div id="prevElement" className="swiper-button-prev">Назад</div>
                <div id="nextElement" className="swiper-button-next">Далі</div>
            </div>
        </>
    )
}

export default Quiz