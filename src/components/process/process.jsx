/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import placeholder from '../../assets/process-placeholder1.webp';
import placeholder2 from '../../assets/process-placeholder2.webp';
import placeholder3 from '../../assets/process-placeholder3.webp';
import sanityClient from '../../sanityClient';

function Process() {
  const [visible, setVisible] = useState([false, false, false]);
  const images = [placeholder, placeholder2, placeholder3];
  const [text, setText] = useState([]);
  const [title, setTitle] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "process"]{
          title,
          body
        }`,
      )
      .then((data) => {
        const titles = data.map((item) => item.title);
        const texts = data.map((item) => item.body);
        setTitle(titles);
        setText(texts);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const onEnterViewport = (index) => {
    setVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const onExitViewport = (index) => {
    setVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <Container style={{ overflowX: 'hidden' }}>
      <h2 className="text-center mb-5 mt-5">Our 3-Part Technical Consulting Process</h2>
      <Row>
        {!loading && ['right', 'left', 'right'].map((direction, index) => (
          <Col md={12} key={direction} className="mb-4">
            <ScrollTrigger
              onEnter={() => onEnterViewport(index)}
              onExit={() => onExitViewport(index)}
              once={false}
              offset={{ top: 700 }}
            >
              <Card
                className="mb-4 h-100"
                style={{
                  opacity: visible[index] ? 1 : 0,
                  transform: visible[index] ? 'translateX(0)' : `translateX(${direction === 'right' ? '100%' : '-100%'})`,
                  transition: 'opacity 1s, transform 1s',
                  boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                }}
              >
                <Card.Body>
                  <Card.Title>{title[index]}</Card.Title>
                  <Card.Text>
                    {text[index]}
                  </Card.Text>
                  <img
                    alt={`${title[index]}`}
                    src={images[index]}
                    style={{ width: '100%' }}
                  />
                </Card.Body>
              </Card>
            </ScrollTrigger>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Process;
