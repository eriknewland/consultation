import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import { AiFillYoutube } from 'react-icons/ai';
import sanityClient from '../../sanityClient';
import './classroom.css';

function Classroom() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "classroom"]{
        title,
        description,
        image {
          asset->{
            _id,
            url
          },
          alt
        },
        projectTime
      }`,
    )
      .then((data) => setClasses(data));
  }, []);
  return (
    <Row style={{
      background: 'url(\'https://source.unsplash.com/random?tech\') center center / cover no-repeat',
      minHeight: '70vh',
      margin: '0',
    }}
    >
      <Container>
        <div className="title-wrapper-classroom">
          <div className="title-background-classroom">
            <h2 className="text-black text-uppercase text-center" style={{ marginBottom: '0' }}>Classroom</h2>
          </div>
        </div>
        <Row>
          {classes.map((workshop) => (
            <Col md={6} lg={3} key={workshop} className="mb-4">
              <Card className="h-100" style={{ borderWidth: '0' }}>
                <Card.Img variant="top" src={workshop.image.asset.url} />
                <Card.Body>
                  <Card.Title>{workshop.title}</Card.Title>
                  <Card.Text>{workshop.description}</Card.Text>
                </Card.Body>
                <div className="youtube-button-wrapper">
                  <a href="https://www.youtube.com">
                    <AiFillYoutube size="24" color="#FF0000" />
                  </a>
                </div>
                <Card.Footer>
                  <small className="text-muted" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>Estimated project time:</span>
                    <span>
                      {workshop.projectTime}
                      {' '}
                      {workshop.projectTime > 1 ? 'hrs' : 'hr'}
                    </span>
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Row>
  );
}

export default Classroom;
