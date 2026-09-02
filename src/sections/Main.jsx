import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const ROLES = [
  "Full-Stack Developer",
  "React Developer",
  "ASP.NET Core Developer",
  "Problem Solver"
];

// Small self-contained typewriter hook: types a word, pauses,
// deletes it, then moves to the next word in the ROLES list.
const useTypewriter = (words, typeSpeed = 90, pause = 1400) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? typeSpeed / 2 : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, pause]);

  return text;
};

const Main = () => {
  const typed = useTypewriter(ROLES);

  return (
    <div className="hero-section text-white text-center py-5 shadow-lg">
      {/* Softly floating blurred orbs for ambient motion */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold" data-aos="fade-down">
          Hi, I'm <span className="gradient-text">Prateek Tripathi</span>
        </h1>
        <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
          A <span className="typed-role">{typed}</span><span className="typed-cursor">|</span> building
          scalable web applications with ASP.NET Core, React, and Node.js.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button variant="primary" size="lg" href="#projects" className="hero-btn" data-aos="zoom-in" data-aos-delay="400">
            View My Work
          </Button>
          <Button variant="light" size="lg" href="/Prateek_Resume.pdf" download className="hero-btn" data-aos="zoom-in" data-aos-delay="500">
            Download Resume
          </Button>
          <Button variant="outline-light" size="lg" href="#contact" className="hero-btn" data-aos="zoom-in" data-aos-delay="600">
            Contact Me
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Main;