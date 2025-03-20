import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/brandon-srg" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-steve-rubiano-gil-a10962357/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/brandon__srg/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
                <p className="footer-text">© 2024 Brandon Steve Rubiano Gil. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}; 