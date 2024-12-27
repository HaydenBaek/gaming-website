import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import Razer from '../images/razer.jpg';
import Logitech from '../images/logitech.png';
import Alienware from '../images/alienware.png';
import HyperX from '../images/hyperX.png';
import Corsair from '../images/corsair.png';
import SteelSeries from '../images/Steelseries-logo.png';
import Wooting from '../images/wooting.png';

import '../styles/Slide.css';

const Slide = () => {

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.navigation.update();  // Force re-init
        }
    }, []);

    const swiperRef = useRef(null);

    // Manual navigation handlers
    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    return (
        <div className="slider-wrapper">
            <Swiper
                ref={swiperRef}
                className="mySwiper"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={window.innerWidth < 768 ? 1 : 3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                navigation={true}  // Important: Directly enable navigation
                modules={[EffectCoverflow, Navigation]}  // Ensure Navigation is passed as a module
            >

                {[Razer, Logitech, Alienware, HyperX, Corsair, SteelSeries, Wooting].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className='slide-wrapper'>
                            <img src={img} alt="brand" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className='slider-controls'>
                <button className='custom-arrow prev' onClick={handlePrev}>&lt;</button>
                <button className='custom-arrow next' onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
};

export default Slide;
