import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  const skillCategories = [
    { name: "Languages & Core", skills: ['Java', 'C++', 'C#', 'Python', 'JavaScript', 'DSA'] },
    { name: "Web Development", skills: ['ASP.NET Core', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS'] },
    { name: "Databases & Cloud", skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git/GitHub'] }
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
            <p className="lead text-primary mb-3">B.Tech CSE Student, GNCT (AKTU) &middot; GATE 2026 Qualified</p>
            
            <div className="pe-lg-5">
              <p className="mb-2">
                I'm a full-stack developer based in Greater Noida with hands-on experience building
                scalable web applications using <strong>ASP.NET Core, React, and Node.js</strong> across
                three corporate internships, including an ongoing role at Havells India Limited.
              </p>
              <p className="mb-4">
                Beyond shipping production features, I spend my time solving algorithmic problems
                — I completed GeeksforGeeks' 160-day DSA challenge — and exploring how AI tools like
                Power BI and IBM SkillsBuild can be woven into everyday engineering workflows.
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