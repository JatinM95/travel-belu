import React from 'react'
import Navbar1 from "../../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../../components/Slider/Slider';
import Footer from "../../components/Footer/Footer";
import logo from '../../assets/images/logo/belu_logo.png'

function Home() {
  return (
    <>
    <Navbar1 logo={logo}/>
    <Slider />
    <Footer />
    </>
  )
}

export default Home