/* eslint-disable no-console */
import React, { useRef } from 'react';
import {
  Container, Row, Col, Form, Button, Nav,
} from 'react-bootstrap';
import './footer.css';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

function Footer() {
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an email using EmailJS
    emailjs.sendForm('service_glh43la', 'template_hpqlutn', form.current, 'LDKqItcOdzGy0MTzd')
      .then((result) => {
        console.log(result.text);
        enqueueSnackbar('Message sent successfully', { variant: 'success' });
      }, (error) => {
        console.log(error.text);
        enqueueSnackbar('Failed to send message', { variant: 'error' });
      });
    event.target.reset();
  };

  return (
    <footer id="footer">
      <Container>
        <SnackbarProvider />
        <Row>
          <Col md={6}>
            <h4>Get in Touch</h4>
            <Form onSubmit={(e) => handleSubmit(e)} ref={form}>
              <Form.Group controlId="formName">
                <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
                <Form.Label className="floating-label">Name</Form.Label>
                {' '}
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
                <Form.Label className="floating-label">Email</Form.Label>
                {' '}
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" name="message" rows={3} placeholder="Your message" required style={{ resize: 'none' }} />
                <Form.Label className="floating-label">Message</Form.Label>
                {' '}
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  marginTop: '2rem', textTransform: 'uppercase', borderRadius: '0', backgroundColor: '#444', borderColor: '#333', borderWidth: '0px',
                }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <h4>Resources</h4>
            <Nav className="flex-column">
              <Nav.Link href="/team">Team</Nav.Link>
              <Nav.Link href="/process">Process</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/classroom">Classroom</Nav.Link>
            </Nav>
            <Row className="justify-content-center mt-4">
              <div className="d-flex">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <FaFacebookF size="24" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <FaTwitter size="24" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <FaInstagram size="24" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <FaLinkedinIn size="24" />
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
