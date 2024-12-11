import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "@/components/Navbar/Navbar.jsx";
import Slider from "@/components/Slider/Slider.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import logo from '@/assets/images/logo/belu_logo.png';

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