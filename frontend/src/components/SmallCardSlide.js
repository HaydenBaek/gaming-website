import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';  // Important for navigation arrows
import '../styles/SmallCardSlide.css';

import SmallCard from './smallCard';

const SmallCardSlide = ({ products }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        
        if (swiperInstance) {
            swiperInstance.navigation.update();
        }
    }, []);

    return (
        <div className="slider-wrapper">
            <Swiper
                ref={swiperRef}
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
                navigation={true}  // Enable default swiper navigation
                modules={[EffectCoverflow, Navigation]}  // Include Navigation here
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className='slide-wrapper'>
                            <SmallCard 
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                review={product.review}
                                colorVariants={product.colorVariants}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className='slider-controls'>
                <button className='swiper-button-prev'>&lt;</button>  {/* Left Arrow */}
                <button className='swiper-button-next'>&gt;</button>  {/* Right Arrow */}
            </div>
        </div>
    );
};

export default SmallCardSlide;
