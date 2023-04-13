/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import './cardButton.css';
import { useNavigate } from 'react-router-dom';

function InfoCard({
  title, description, imageUrl, icon: IconComponent, buttonText,
}) {
  const navigate = useNavigate();

  return (
    <Card
      className="mb-4 h-100 d-flex flex-column"
      style={{
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
      }}
    >
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          {IconComponent && <IconComponent style={{ marginRight: '8px' }} size="32" />}
          {title}
        </Card.Title>
        <Card.Text className="flex-grow-1 text-center">{description}</Card.Text>
        <Button
          className="d-flex justify-content-end align-items-center customButton"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'black',
          }}
          onClick={() => navigate('/process')}
        >
          {buttonText}
          {' '}
          <BsArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
