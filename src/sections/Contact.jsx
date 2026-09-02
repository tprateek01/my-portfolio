import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    // Formspree handles the actual POST/redirect; this just gives
    // immediate visual feedback on click.
    setSending(true);
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-2" data-aos="fade-up">Get In Touch</h2>
      <p className="text-center text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
        Have a project in mind or just want to say hi? Drop a message below.
      </p>
      <Row className="justify-content-center">
        <Col md={6} data-aos="fade-up" data-aos-delay="200">
          <Form
            action="https://formspree.io/f/xqegdbja"
            method="POST"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <Form.Floating className="mb-3">
              <Form.Control id="contact-name" type="text" name="name" placeholder="Your Name" required />
              <label htmlFor="contact-name">Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control id="contact-email" type="email" name="email" placeholder="name@example.com" required />
              <label htmlFor="contact-email">Email</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="contact-message"
                as="textarea"
                name="message"
                placeholder="Your Message"
                style={{ height: '140px' }}
                required
              />
              <label htmlFor="contact-message">Message</label>
            </Form.Floating>

            <Button variant="primary" type="submit" className="w-100 btn-shine" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;