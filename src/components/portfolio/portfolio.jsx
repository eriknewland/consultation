/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Card, Row, Col, Container, ButtonGroup, Button, Modal,
} from 'react-bootstrap';
import sanityClient from '../../sanityClient';
import useFadeIn from '../../helpers/fadeinHook'; // Import the custom hook

function Portfolio() {
  const [postData, setPostData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const fadeInRef = useFadeIn(300, [filter]); // Pass the filter as a dependency

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "portfolioPiece"]{
        title,
        body[]{
          ...,
          _type == "block" => {
            children[]{
              text
            },
            markDefs[]{
              ...,
            },
          },
        },
        image{
          asset->{
            _id,
            url
          },
          alt
        },
        category
      }`,
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  const handleCardClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredPosts = postData.filter((post, index) => {
    if (filter === 'All') return true;
    if (filter === 'Hardware') return index < 3;
    if (filter === 'Software') return index >= 3 && index < 6;
    if (filter === 'Integrated') return index >= 6;
    return false;
  });

  const filterOptions = [
    { name: 'All', value: 'All' },
    { name: 'Hardware', value: 'Hardware' },
    { name: 'Software', value: 'Software' },
    { name: 'Integrated', value: 'Integrated' },
  ];

  return (
    <Container fluid>
      <h1>Portfolio</h1>
      <div className="text-center mt-5 mb-4">
        <ButtonGroup toggle="true">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              type="radio"
              variant="outline-primary"
              name="filter"
              value={option.value}
              active={filter === option.value}
              onClick={(e) => setFilter(e.target.value)}
            >
              {option.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <Row ref={fadeInRef} key={filter}>
        {filteredPosts.map((post) => (
          <Col key={Math.random() * 1000} md={4} className="mb-4">
            <Card style={{ minWidth: '18rem' }} onClick={() => handleCardClick(post)}>
              <Card.Img variant="top" src={post.image.asset.url} alt={post.image.alt} style={{ maxHeight: '100%', maxWidth: '100%' }} />
              <Card.Body>
                <Card.Title style={{ fontWeight: '900' }}>{post.title}</Card.Title>
                <Card.Text>
                  {post.body[1].children[0].text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedPost?.image.asset.url} alt={selectedPost?.image.alt} style={{ maxHeight: '100%', maxWidth: '100%' }} />
          <p>{selectedPost?.body[1].children[0].text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}

export default Portfolio;
