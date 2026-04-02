import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  const skillCategories = [
    { name: "Frontend", skills: ['React', 'JavaScript', 'Bootstrap', 'HTML5/CSS3'] },
    { name: "Languages & Core", skills: ['Java', 'DSA', 'SQL'] },
    { name: "Tools", skills: ['Git', 'GitHub', 'VS Code', 'Vite'] }
  ];

  return (
    <section id="about" className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container className="py-3">
        <Row className="align-items-center">
          {/* Image Column */}
          <Col md={5} data-aos="fade-right" className="text-center">
            <div className="position-relative d-inline-block">
              <Image 
                src="project-images/Prateek_Image.jpeg" 
                alt="Prateek Tripathi" 
                className="shadow-lg border border-5 border-white"
                style={{ 
                  width: '320px', 
                  height: '320px', 
                  objectFit: 'cover', 
                  objectPosition: 'top', // Keeps your face centered
                  borderRadius: '50%' 
                }} 
              />
            </div>
          </Col>

          {/* Text Column */}
          <Col md={7} data-aos="fade-left">
            <h2 className="fw-bold mb-2">About Me</h2>
            <p className="lead text-primary mb-3">4th Year B.Tech Student at GNCT</p>
            
            <div className="pe-lg-5">
              <p className="mb-2">
                I am a passionate Frontend Developer based in Greater Noida, specializing in 
                responsive web applications and <strong>Data Structures and Algorithms</strong>.
              </p>
              <p className="mb-4">
                During my internship at Unified Mentor, I focused on intuitive user interfaces. 
                Outside of coding in Java, I enjoy <em>Clash of Clans</em> and <em>Among Us</em>.
              </p>
            </div>
            
            <h5 className="fw-bold mb-3">Technical Expertise</h5>
            <Row>
              {skillCategories.map((cat) => (
                <Col xs={6} lg={4} key={cat.name} className="mb-3">
                  <h6 className="text-muted small text-uppercase fw-bold mb-2">{cat.name}</h6>
                  <div className="d-flex flex-wrap gap-1">
                    {cat.skills.map(skill => (
                      <span key={skill} className="badge bg-dark fw-normal" style={{ fontSize: '0.75rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;