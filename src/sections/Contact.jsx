import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (Integrate Formspree or EmailJS here)");
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Get In Touch</h2>
      <Row className="justify-content-center">
        <Col md={6}>
        <Form action="https://formspree.io/f/xqegdbja" method="POST">
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" required />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={4} required />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100">Send Message</Button>
        </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;