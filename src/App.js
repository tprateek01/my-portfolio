import React, { useEffect } from 'react';
import Navigation from './components/Navbar';
import Main from './sections/Main';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      {/* Navbar stays at the top */}
      <Navigation />

      {/* Main content area wrapped for Flexbox logic */}
      <main>
        <section id="home">
          <Main />
        </section>
        
        <About /> {/* Ensure About.jsx has id="about" on its <section> */}
        
        <Projects /> {/* Ensure Projects.jsx has id="projects" on its <section> */}
        
        <Contact /> {/* Ensure Contact.jsx has id="contact" on its <section> */}
      </main>

      {/* Footer stays at the very bottom */}
      <Footer />
    </div>
  );
}

export default App;