import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '@/assets/images/Pic1.jpg';
import slide2 from '@/assets/images/Pic2.jpg';
import slide3 from '@/assets/images/Pic3.jpg';
// import overlayslide from '../../assets/images/img_62b342e93a6b3e0aaad173c0png.webp';
import './styles.css';
// import EmailWaitlist from '../EmailWaitlist/EmailWaitlist';
// import Popup from '../Popup/Popup';

function Slider() {
    // const [successMessage, setSuccessMessage] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const pull_data = (data) => {
        // setSuccessMessage(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
        setModalShow(true);
    }
    return (
        <>
            {/* <Popup
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
            {/* <div className='bg-light rounded-pill overlay'>
                <EmailWaitlist func={pull_data} />
            </div> */}
            <Carousel indicators={false} data-bs-theme="dark">
                <Carousel.Item>
                    <div className='position-relative'>
                        <img className='d-block w-100' src={slide1} alt='first slide' />
                        {/* <img
                            className='bottom-image position-absolute w-100 start-50 translate-middle-x overlayimg'
                            src={overlayslide}
                            alt='overlay slide'
                        /> */}
                    </div>
                    <Carousel.Caption>
                        <h3 className='font-weight-bolder text-dark text-center first-slide-text'>🌍 Exciting Changes Are Coming! 🚀</h3>
                        {/* <div className='bg-light rounded-pill border first-slide-div'>
                    <EmailWaitlist func={pull_data}/>
                </div> */}
                        {/* <p className='text-dark'>{successMessage}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='position-relative'>
                        <img className='d-block w-100' src={slide2} alt='second slide' />
                        {/* <img
                            className='bottom-image position-absolute w-100 start-50 translate-middle-x overlayimg'
                            src={overlayslide}
                            alt='overlay slide'
                        /> */}
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='font-weight-bolder text-dark text-center first-slide-text'>🌍 Exciting Changes Are Coming! 🚀</h3>
                        {/* <div className='bg-light rounded-pill border first-slide-div'>
                    <EmailWaitlist func={pull_data}/>
                </div> */}
                        {/* <p className='text-dark'>{successMessage}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='position-relative'>
                        <img className='d-block w-100' src={slide3} alt='third slide' />
                        {/* <img
                            className='bottom-image position-absolute w-100 start-50 translate-middle-x overlayimg'
                            src={overlayslide}
                            alt='overlay slide'
                        /> */}
                    </div>
                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='font-weight-bolder text-dark text-center first-slide-text'>🌍 Exciting Changes Are Coming! 🚀</h3>
                        {/* <div className='bg-light rounded-pill border first-slide-div'>
                    <EmailWaitlist func={pull_data}/>
                </div> */}
                        {/* <p className='text-dark'>{successMessage}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider