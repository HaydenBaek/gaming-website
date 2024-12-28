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

import '../styles/Slide.css';

const Slide = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.navigation.update();  // Force re-init
        }
    }, []);

    // Manual navigation handlers
    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    // Brand images and URLs
    const brands = [
        { img: Razer, url: '/Razer' },
        { img: Logitech, url: '/Logitech' },
        { img: HyperX, url: '/HyperX' },
        { img: Corsair, url: '/Corsair' },
        { img: SteelSeries, url: '/SteelSeries' }
    ];

    // Handle slide click
    const handleSlideClick = (url) => {
        window.location.href = url;  // Navigate without opening a new tab
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
                navigation={true}  // Directly enable navigation
                modules={[EffectCoverflow, Navigation]}  // Ensure Navigation is passed
            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index} onClick={() => handleSlideClick(brand.url)}>
                        <div className='slide-wrapper'>
                            <img src={brand.img} alt="brand" />
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


