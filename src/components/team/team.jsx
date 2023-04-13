import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import './team.css';
import PropTypes from 'prop-types';
import sanityClient from '../../sanityClient';

function TeamMember({
  imageUrl, name, role, summary,
}) {
  return (
    <Card className="mb-4 h-100 shadow-sm" style={{ transition: 'transform 0.2s', borderWidth: '0' }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderTopLeftRadius: 'calc(0.25rem - 1px)',
          borderTopRightRadius: 'calc(0.25rem - 1px)',
          borderBottomLeftRadius: '50% 20%',
          borderBottomRightRadius: '50% 20%',
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
        <Card.Text>{summary}</Card.Text>
        <div className="d-flex justify-content-between">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size="24" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size="24" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

function Team() {
  const [teamContent, setTeamContent] = useState([]); // using this

  useEffect(() => {
    sanityClient.fetch(`*[_type == "team"]{
      title,
      body,
      image {
        asset->{
          _id,
          url
        },
        alt
      }
    }`)
      .then((data) => setTeamContent(data));
  }, []);
  return (
    <div style={{ background: 'url(\'https://source.unsplash.com/random?microchip\') center center / cover no-repeat' }}>
      <div className="team-title-wrapper">
        <div className="team-title-background">
          <h2 className="text-center" style={{ marginBottom: '0' }}>Meet Our Team</h2>
        </div>
      </div>
      <div className="container mt-5">
        <Row style={{ paddingBottom: '2rem' }}>
          {teamContent.map((member) => (
            <Col md={4} key={member}>
              <TeamMember
                imageUrl={member.image.asset.url}
                name={member.title}
                role={member.body[0].children[0].text}
                summary={member.body[1].children[0].text}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Team;
