import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import { GiCircuitry, GiGears } from 'react-icons/gi';
import { AiOutlineWifi } from 'react-icons/ai';
import InfoCard from '../infoCard/infoCard';
import heroPlaceholder2 from '../../assets/hero-placeholder2.jpg';
import ProjectCarousel from '../projectCarousel/projectCarousel';
import FAQSection from '../faqSection/faqSection';
import classroom1 from '../../assets/classroom-placeholder-1.jpg';
import classroom2 from '../../assets/classroom-placeholder-2.jpg';
import sanityClient from '../../sanityClient';
import './homepage.css';
import useViewportVisibility from '../../helpers/viewportHelper';

function HomePage() {
  const [heroVisible, onEnterViewportHero, onExitViewportHero] = useViewportVisibility();
  const [visible, onEnterViewport, onExitViewport] = useViewportVisibility();
  const [faqVisible, onEnterViewportFAQ, onExitViewportFAQ] = useViewportVisibility();
  const
    [classroomVisible, onEnterViewportClassroom, onExitViewportClassroom] = useViewportVisibility();
  const
    [portfolioVisible, onEnterViewportPortfolio, onExitViewportPortfolio] = useViewportVisibility();

  const [copy, setCopy] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "heros"]{
        title,
        body
      }`,
      )
      .then((data) => setCopy(data));
  }, []);

  return (
    <Container fluid>
      <Row>
        <ScrollTrigger
          onEnter={onEnterViewportHero}
          onExit={onExitViewportHero}
          once
          offset={{ top: 500 }}
        >
          <Col
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 3s',
              marginLeft: '-15px',
              marginRight: '-15px',
            }}
          >
            <img
              className="homepage-hero-image"
              src={heroPlaceholder2}
              alt="Consulting firm"
            />
            <h1 className="homepage-header">
              Rapid Implementation of any Innovation
            </h1>
            <Button
              style={{
                textTransform: 'uppercase',
                position: 'absolute',
                marginTop: '7.5rem',
                borderRadius: '0',
                backgroundColor: '#444',
                borderColor: '#333',
                borderWidth: '0px',
                fontWeight: 'bold',
                padding: '20px',
                fontSize: '1rem',
              }}
            >
              Same-day Consultation
            </Button>
          </Col>
        </ScrollTrigger>
      </Row>
      <Container>
        <ScrollTrigger
          onEnter={onEnterViewport}
          onExit={onExitViewport}
          once={false}
          offset={{ top: 500 }}
        >
          <Row
            className="justify-content-between"
            style={{
              marginTop: '2rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 3s',

            }}
          >
            <Col xs="auto" style={{ fontSize: '2rem', textTransform: 'uppercase' }}>You Dream it</Col>
            <Col xs="auto" style={{ fontSize: '2rem', textTransform: 'uppercase' }}>We Build it</Col>
          </Row>
        </ScrollTrigger>
      </Container>
      <ScrollTrigger
        onEnter={onEnterViewport}
        onExit={onExitViewport}
        once={false}
        offset={{ top: 500 }}
      >
        <Row
          style={{
            marginTop: '2rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 3s',

          }}
        >
          <Col md={4}>
            <InfoCard
              icon={GiCircuitry}
              title="Schematic Capture & PCB"
              description={copy[0]?.body}
              imageUrl="https://source.unsplash.com/random/400x300?pcb"
              buttonText="PCB LAB"
            />
          </Col>
          <Col md={4}>
            <InfoCard
              icon={GiGears}
              title="3D Modeling & Manufacturing"
              description={copy[1]?.body}
              imageUrl="https://source.unsplash.com/random/400x300?3d-modeling"
              buttonText="3D FACTORY"
            />
          </Col>
          <Col md={4}>
            <InfoCard
              icon={AiOutlineWifi}
              title="Firmware & Software"
              description={copy[2]?.body}
              imageUrl="https://source.unsplash.com/random/400x300?software"
              buttonText="SOFTWARE HUB"
            />
          </Col>
        </Row>
      </ScrollTrigger>
      <ScrollTrigger
        onEnter={onEnterViewportPortfolio}
        onExit={onExitViewportPortfolio}
        once={false}
        offset={{ top: 500 }}
      >
        <Container
          style={{
            marginTop: '2rem',
            opacity: portfolioVisible ? 1 : 0,
            transition: 'opacity 3s',
          }}
        >
          <h2 style={{ textTransform: 'uppercase' }}>Discover our Portfolio</h2>
          <ProjectCarousel />
        </Container>
      </ScrollTrigger>
      <ScrollTrigger
        onEnter={onEnterViewportFAQ}
        onExit={onExitViewportFAQ}
        once={false}
        offset={{ top: 500 }}
      >
        <Row style={{ opacity: faqVisible ? 1 : 0, transition: 'opacity 3s' }}>
          <FAQSection />
        </Row>
      </ScrollTrigger>
      <ScrollTrigger
        onEnter={onEnterViewportClassroom}
        onExit={onExitViewportClassroom}
        once={false}
        offset={{ top: 800 }}
      >
        <Row style={{
          marginTop: '2rem', marginBottom: '2rem', opacity: classroomVisible ? 1 : 0, transition: 'opacity 3s',
        }}
        >
          <h2>
            PDL Classroom
          </h2>
          <Col md={{ span: 4, offset: 1 }}>
            <InfoCard
              title="Intro to Firmware"
              description="Learn about Firmware and create a simple micro-controller"
              imageUrl={classroom1}
              buttonText="Learn More"
            />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <InfoCard
              title="Drone Debugging 101"
              description="Troubleshoot and debug your drone project"
              imageUrl={classroom2}
              buttonText="Learn More"
            />
          </Col>
        </Row>
      </ScrollTrigger>
    </Container>
  );
}

export default HomePage;
