import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '@/assets/images/Pic1.jpg';
import slide2 from '@/assets/images/Pic2.jpg';
import slide3 from '@/assets/images/Pic3.jpg';
import './styles.css';

function Slider() {
    return (
        <>
            <Carousel indicators={false} data-bs-theme="dark">
                <Carousel.Item>
                    <div className='position-relative'>
                        <img className='d-block w-100' src={slide1} alt='first slide' />
                    </div>
                    <Carousel.Caption>
                        <h3 className='font-weight-bolder text-dark text-center first-slide-text'>🌍 Exciting Changes Are Coming! 🚀</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='position-relative'>
                        <img className='d-block w-100' src={slide2} alt='second slide' />
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='font-weight-bolder text-dark text-center first-slide-text'>🌍 Exciting Changes Are Coming! 🚀</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='position-relative'>
                        <img className='d-block w-100' src={slide3} alt='third slide' />
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='font-weight-bolder text-dark text-center first-slide-text'>🌍 Exciting Changes Are Coming! 🚀</h3>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider