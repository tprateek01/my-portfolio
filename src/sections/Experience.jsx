import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const Experience = () => {
  const roles = [
    {
      company: "Havells India Limited",
      title: "IT Intern – Student Data Management System",
      period: "Feb 2026 – Jun 2026",
      description: "Designed and deployed an enterprise data management system for the IT department, optimizing data validation workflows, relational queries, and student records retrieval.",
      tags: ["ASP.NET Core", "SQL", "Enterprise Systems"]
    },
    {
      company: "Softpro India Computer Technologies",
      title: "Full Stack Web Development Intern",
      period: "Jun 2025 – Aug 2025",
      description: "Engineered full-stack features using React and MySQL; designed normalized database schemas and integrated RESTful endpoints to improve data exchange efficiency.",
      tags: ["React.js", "MySQL", "REST APIs"]
    },
    {
      company: "Unified Mentor",
      title: "Full Stack Web Development Intern",
      period: "Mar 2025 – Apr 2025",
      description: "Built modular front-end interfaces with HTML5, CSS3, and JavaScript, prioritizing mobile responsiveness, semantic accessibility, and cross-browser consistency.",
      tags: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-5">
      <Container fluid="lg">
        <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">Internship Experience</h2>
        <Row className="g-4">
          {roles.map((role, index) => (
            <Col md={4} key={role.company} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-100 p-4 rounded shadow-sm border-start border-primary border-4 bg-white">
                <p className="text-muted small mb-1 fw-bold text-uppercase">{role.period}</p>
                <h5 className="fw-bold mb-1">{role.company}</h5>
                <p className="text-primary mb-2" style={{ fontSize: '0.9rem' }}>{role.title}</p>
                <p className="mb-3" style={{ fontSize: '0.9rem' }}>{role.description}</p>
                <div className="d-flex flex-wrap gap-1">
                  {role.tags.map(tag => (
                    <Badge key={tag} bg="secondary" className="fw-normal" style={{ fontSize: '0.7rem' }}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;