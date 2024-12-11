import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import './styles.css';

function ContactUs() {
    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if(form.checkValidity() === false){
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

  return (
    <Container className='containerContact'>
        <Row>
            <Col lg="7">
                <h1 className='mb-5'>Contact Us</h1>
                {/* <p className='mb-5'>Need to get in touch with us? Fill out the form with your inquiry.</p> */}
                <p>Belu Travel</p>
                <p>Amsterdam, Netherlands</p>
                <p>info@belu.travel</p>
                <p><a href='https://linktr.ee/belutravel'>https://linktr.ee/belutravel</a></p>
                <p>Whatsapp: <a href='wa.me/31628702660'>wa.me/31628702660</a></p>
            </Col>
            {/* <Col lg="5">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='shadow-lg p-3'>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide first name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>Please provide last name</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                required
                                type="email" 
                                placeholder="name@example.com" 
                            />
                            <Form.Control.Feedback type='invalid'>Please provide a valid email</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label>What can we help you with?</Form.Label>
                            <Form.Control required as="textarea" rows={3} />
                            <Form.Control.Feedback type='invalid'>Please provide a valid reason</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Col> */}
        </Row>
    </Container>
  )
}

export default ContactUs