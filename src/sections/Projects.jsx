import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const myWork = [
    {
      title: "DigiFarm",
      description: "A MERN stack platform connecting farmers and merchants to streamline agricultural trade.",
      githubLink: "https://github.com/tprateek01/DigiFarm_Project", 
      liveLink: "#",
      image: "/project-images/DigiFarm.png",
      tags: ["React.js", "MongoDB", "Node.js", "Express.js"] 
    },
    {
      title: "Calculator Pro",
      description: "A sleek, functional basic calculator built with HTML, CSS, and JavaScript. Features a clean UI and responsive design.",
      githubLink: "https://github.com/tprateek01/calculator-pro",
      liveLink: "https://tprateek01.github.io/calculator-pro/",
      image: "/project-images/Calculator.png",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Music Player",
      description: "A custom web-based music player featuring play/pause functionality, track seeking, and a dynamic interface.",
      githubLink: "https://github.com/tprateek01/Music-player-project",
      liveLink: "https://tprateek01.github.io/Music-player-project/",
      image: "/project-images/MusicPlayer.png",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Portfolio Website",
      description: "Built with React, Bootstrap, and AOS. Fully responsive with smooth scroll animations.",
      githubLink: "https://github.com/tprateek01/",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500",
      tags: ["React", "Bootstrap", "AOS"]
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container fluid="lg">
        <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">Featured Projects</h2>
        {/* Row setup: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <Row xs={1} md={2} lg={4} className="g-4">
          {myWork.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;