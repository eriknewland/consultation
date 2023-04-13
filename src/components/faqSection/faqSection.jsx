import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import './faqSection.css';
import sanityClient from '../../sanityClient';

function FAQSection() {
  const [faqCopy, setFaqCopy] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "faq"]{
        question,
        answer
      }`,
      )
      .then((data) => setFaqCopy(data));
  }, []);
  return (
    <>
      <h3 className="faq-h3">Frequently Asked Questions</h3>
      {faqCopy.length > 0 && (
        <Accordion>
          {faqCopy.map((faq, index) => (
            <Accordion.Item key={Math.random() * 10} eventKey={index.toString()}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </>
  );
}

export default FAQSection;
