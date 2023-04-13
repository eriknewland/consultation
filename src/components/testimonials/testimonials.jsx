import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import FadeInSection from '../../helpers/intersectionObserver';
import './testimonials.css';

function Testimonials() {
  // Update with your Testimonial Data from Sanity.io
  const testimonialsData = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    imageUrl: `https://source.unsplash.com/random?technology&${i}`,
    projectName: `Project ${i + 1}`,
    quote: 'This is a great project, and the team did an outstanding job.',
    author: `Author ${i + 1}`,
    date: `Month ${(i % 12) + 1}, 2023`,
  }));

  return (
    <Container fluid>
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="testimonial-conainer">
        {testimonialsData.map((testimonial) => (
          <FadeInSection>
            <Row
              className="mb-4"
              style={{
                transition: 'opacity 1s',
              }}
            >
              <Col md={{ span: 8, offset: 2 }}>
                <Card style={{ zIndex: '-10' }}>
                  <Card.Img variant="top" src={testimonial.imageUrl} />
                  <Card.Body>
                    <Card.Title>{testimonial.projectName}</Card.Title>
                    <Card.Text>
                      <em>
                        &quot;
                        {testimonial.quote}
                        &quot;
                      </em>
                    </Card.Text>
                    <Card.Text>
                      <strong>{testimonial.author}</strong>
                    </Card.Text>
                    <Card.Text>{testimonial.date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </FadeInSection>
        ))}
      </div>
    </Container>
  );
}

export default Testimonials;
