import React, { useRef } from 'react';
import { Card, Button, Col, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, githubLink, liveLink, tags, delay = 0 }) => {
  const cardRef = useRef(null);

  // Subtle 3D tilt that follows the cursor, plus a soft radial glow
  // positioned at the pointer.
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <Col className="d-flex" data-aos="fade-up" data-aos-delay={delay}>
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-100 border-0 shadow-sm w-100 overflow-hidden project-card-tilt"
      >
        {/* Cursor-following glow overlay */}
        <div className="project-card-glow" />

        {/* Using 'contain' and a background color ensures the FULL image is visible */}
        <div style={{ background: '#f8f9fa', borderBottom: '1px solid #eee', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={image || "https://via.placeholder.com/300x200"}
            className="project-card-img"
            style={{
              height: '180px',
              objectFit: 'contain',
              padding: '10px'
            }}
            alt={title}
          />
        </div>

        <Card.Body className="d-flex flex-column p-3">
          <Card.Title className="fw-bold h5">{title}</Card.Title>

          <div className="mb-2">
            {tags && tags.map((tag, index) => (
              <Badge
                key={index}
                bg="secondary"
                className="me-1 fw-normal tag-badge"
                style={{ fontSize: '0.75rem', animationDelay: `${index * 0.05}s` }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
            {description}
          </Card.Text>

          <div className="mt-3 pt-3 border-top">
            <Button
                variant="dark"
                size="sm"
                href={githubLink}
                target="_blank"
                className="me-2 btn-shine"
            >
              <FaGithub /> Code
            </Button>

            {liveLink !== "#" && (
              <Button
                variant="outline-primary"
                size="sm"
                href={liveLink}
                target="_blank"
                className="btn-shine"
              >
                <FaExternalLinkAlt /> Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;