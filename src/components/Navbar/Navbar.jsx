import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../../assets/images/Frame_1116605564.png'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Navbar1({logo, background}) {
  let textcolor;
  let variant_Btn;
  if(background){
    textcolor = "text-light text-decoration-none";
    variant_Btn = "outline-light";
  }
  else{
    variant_Btn = "outline-dark";
    textcolor = "text-dark text-decoration-none";
  }
  return (
    <Navbar expand="lg">
        <Container className='mt-4'>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} width="100px" alt="travelout logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
              <Nav>
                  {/* <Nav.Link>
                  <Link to={"/about"} className={textcolor}>About Us</Link>
                  </Nav.Link>
                  <Nav.Link>
                  <Link to={"/our_stories"} className={textcolor}>Our Stories</Link>
                  </Nav.Link> */}
                  <Link to={"/contact"}>
                  <Button variant={variant_Btn} className='rounded-pill' style={{width:'100px'}}>Contact</Button>
                  </Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbar1