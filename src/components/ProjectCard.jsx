import React from 'react';
import { Card, Button, Col, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, githubLink, liveLink, tags }) => {
  return (
    <Col className="d-flex">
      <Card className="h-100 border-0 shadow-sm w-100 overflow-hidden">
        {/* Using 'contain' and a background color ensures the FULL image is visible */}
        <div style={{ background: '#f8f9fa', borderBottom: '1px solid #eee' }}>
            <Card.Img 
              variant="top" 
              src={image || "https://via.placeholder.com/300x200"} 
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
              <Badge key={index} bg="secondary" className="me-1 fw-normal" style={{ fontSize: '0.75rem' }}>
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
                className="me-2"
            >
              <FaGithub /> Code
            </Button>
            
            {liveLink !== "#" && (
              <Button 
                variant="outline-primary" 
                size="sm" 
                href={liveLink} 
                target="_blank"
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