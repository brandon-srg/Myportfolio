import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>My Portfolio</h1>
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/estudios" className="nav-link">Estudios</Link>
                    <Link to="/experiencia" className="nav-link">Experiencia</Link>
                    <Link to="/habilidades" className="nav-link">Habilidades</Link>
                </nav>
            </div>
        </header>
    );
}; 