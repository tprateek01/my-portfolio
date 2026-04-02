import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="mb-3">
        <a 
          href="https://www.linkedin.com/in/prateek-tripathi-3a100a252?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white mx-3 fs-4"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/tprateek01" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white mx-3 fs-4"
        >
          <FaGithub />
        </a>
        <a 
          href="mailto:prateekmrj08@gmail.com" 
          className="text-white mx-3 fs-4"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="mb-0 small">© {new Date().getFullYear()} Prateek Tripathi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;