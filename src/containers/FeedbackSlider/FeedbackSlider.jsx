import React from 'react'
import './_feedbackSlider.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import data from '../../utils/data/data';
import FeedBackSlideItem from './FeedbackSlideItem/FeedBackSlideItem';

const FeedbackSlider = () => {

    const pagination = {
        clickable: true,
        renderCustom: function (current, total) {
            return current + ' of ' + total;
        }
    }

    return (
        <>
            <div className="feedbackSlider">
                <Swiper pagination={pagination}
                    navigation={true}

                    modules={[Pagination, Navigation]} className='feedbackSlider'>

                    <div className="swiper-wrapper">
                        {data?.feedbackData.map((feedbackItem, index) => (
                            <SwiperSlide key={index}>
                                <FeedBackSlideItem image={feedbackItem.image} avatarName={feedbackItem.avatarName} avatarDesc={feedbackItem.avatarDesc} avatarText={feedbackItem.avatarText} feedbackContent={feedbackItem.feedbackContent} feedbackImage={feedbackItem.feedbackImage} />
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper >
            </div>
        </>
    )
}

export default FeedbackSlider