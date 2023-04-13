import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slides = [
  {
    key: 1,
    title: 'Slide 1',
    description: 'Thunderbird',
    content: (
      <Link to="/portfolio" style={{ textDecoration: 'none', color: 'black' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?drone" alt="1" />
          <Card.Body>
            <Card.Title>Thunderbird</Card.Title>
            <Card.Text>
              Solar-Powered Drone with Infinite Battery Tech
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    ),
  },
  {
    key: 2,
    title: 'Slide 2',
    description: 'Go-Go Skootr',
    content: (
      <Link to="/portfolio" style={{ textDecoration: 'none', color: 'black' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?scooter" alt="2" />
          <Card.Body>
            <Card.Title>Go-Go Skootr</Card.Title>
            <Card.Text>
              Lightweight, Highspeed, All-Terrain
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    ),
  },
  {
    key: 3,
    title: 'Slide 3',
    description: 'VR Goggles',
    content: (
      <Link to="/portfolio" style={{ textDecoration: 'none', color: 'black' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://source.unsplash.com/random/400x300?vr-headset" alt="3" />
          <Card.Body>
            <Card.Title>VR Goggles</Card.Title>
            <Card.Text>
              A fresh and stylish solution to VR hardware
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    ),
  },
];

export default slides;
