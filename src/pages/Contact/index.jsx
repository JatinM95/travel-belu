import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../../components/Navbar/Navbar'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/images/logo/belu_logo.png'
// assets/images/Frame_1116605564.png
// import AppStore from '../../components/AppStore/AppStore'

function Contact() {
  return (
    <>
    <Navbar1 logo={logo}/>
    <ContactUs />
    <Footer />
    </>
  )
}

export default Contact