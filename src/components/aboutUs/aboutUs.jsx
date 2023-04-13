import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import sanityClient from '../../sanityClient';

function AboutUs() {
  const [visible, setVisible] = useState({});
  const [sectionContent, setSectionContent] = useState([]); // using this

  useEffect(() => {
    sanityClient.fetch(`*[_type == "aboutUs"]{
      title,
      body
    }`)
      .then((data) => setSectionContent(data));
  }, []);

  const onEnterViewport = (index) => {
    setVisible((prevState) => ({ ...prevState, [index]: true }));
  };

  const onExitViewport = (index) => {
    setVisible((prevState) => ({ ...prevState, [index]: false }));
  };

  // Update sections array to use sectionContent state
  const sections = sectionContent.map((content) => ({
    title: content.title,
    body: content.body,
    image: content.title.toLowerCase().replace(' ', ''),
  }));

  return (
    <Container fluid>
      {/* About Us Hero */}
      <Row className="align-items-center" style={{ height: '70vh', background: 'url(\'https://source.unsplash.com/random?tech\') center center / cover no-repeat' }}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              display: 'inline-block',
              padding: '0px 5px',
            }}
            >
              <h1 className="text-black text-uppercase text-center" style={{ marginBottom: '0' }}>
                About Us
              </h1>
            </div>
          </div>
        </Col>
      </Row>

      {/* About Us Content */}
      {sections.map((section, index) => (
        <ScrollTrigger
          key={section.title}
          onEnter={() => onEnterViewport(index)}
          onExit={() => onExitViewport(index)}
          once={false}
        >
          <Row
            className="mt-5"
            style={{
              opacity: visible[index] ? 1 : 0,
              transition: 'opacity 1s',
            }}
          >
            {index % 2 === 0 ? (
              <>
                <Col md={6}>
                  <h2 className="text-uppercase">{section.title}</h2>
                  <p>
                    {section.body}
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src={`https://source.unsplash.com/random?${section.image}`}
                    alt={section.title}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Col>
              </>
            ) : (
              <>
                <Col md={6}>
                  <img
                    src={`https://source.unsplash.com/random?${section.image}`}
                    alt={section.title}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={6}>
                  <h2 className="text-uppercase">{section.title}</h2>
                  <p>
                    {section.body}
                  </p>
                </Col>
              </>
            )}
          </Row>
        </ScrollTrigger>
      ))}
    </Container>
  );
}

export default AboutUs;
