import React from 'react'
import logo from '../../assets/images/logo/belu_logo.png'
import instalogo from '../../assets/images/instagram.png'
import facebookLogo from '../../assets/images/facebook.png'
import linkedinlogo from '../../assets/images/linkedin.png'
import youtubelogo from '../../assets/images/youtube.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='pt-5' style={{backgroundColor:"#000000"}}>
        {/* <div ></div> */}
        <img src={logo} alt="belu logo" width="100px" className='d-block m-auto mb-4'/>
        {/* <div className='d-flex justify-content-center text-light mt-4 pb-3'>
          <Link to="/about" className='me-3 text-light btn'>About us</Link>
          <Link to="/our_stories" className='me-3 text-light btn'>Our Stories</Link>
          <Link to="/privacy_policy" className='me-3 text-light btn'>Privacy policy</Link>
        </div> */}
        <div className='m-auto pb-4 pt-4 d-flex border-top justify-content-between' style={{width:"85%"}}>
            <p className='m-0 text-light'>Copyright © 2024 Belu Travel All rights reserved</p>
            <div>
                <a href="https://www.instagram.com/belutravel.go"><img src={instalogo} alt="insta logo" className='me-3' /></a>
                <a href="https://www.facebook.com/belutravel.go"><img src={facebookLogo} width={32} height={32} alt="fb logo" className='me-3' /></a>
                <a href="https://www.linkedin.com/company/belu-travel"><img src={linkedinlogo} alt="linkedin logo" className='me-3' /></a>
                <a href="https://www.youtube.com/@BeluTravel.LuxuryTravelAgency"><img src={youtubelogo} alt="tiktok logo" /></a>
            </div>
        </div>

    </div>
  )
}

export default Footer