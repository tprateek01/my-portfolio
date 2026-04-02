import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Main = () => {
  return (
    // In Main.jsx
        <div 
        className="text-white text-center py-5 shadow-lg" 
        style={{ 
            background: 'linear-gradient(135deg, #212529 0%, #0d6efd 100%)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center'
        }}
        >
        <Container className="py-5">
        <h1 className="display-3 fw-bold" data-aos="fade-down">
            Hi, I'm <span className="text-primary">Prateek Tripathi</span>
        </h1>
        <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
            A Frontend Developer passionate about building clean, functional, and user-centric applications.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button variant="primary" size="lg" href="#projects" data-aos="zoom-in" data-aos-delay="400">
                View My Work
            </Button>
            <Button variant="light" size="lg" href="/Prateek_Resume.pdf" download data-aos="zoom-in" data-aos-delay="500">
                Download Resume
            </Button>
            <Button variant="outline-light" size="lg" href="#contact" data-aos="zoom-in" data-aos-delay="600">
                Contact Me
            </Button>
        </div>
      </Container>
    </div>
  );
};

export default Main;