import React from 'react';
import './Hero.css';

export const Hero = ({ image, greeting, name, description }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-image">
                    <div className="image-container">
                        <img src={image} alt={name} />
                    </div>
                </div>
                <div className="hero-text">
                    <span className="greeting">{greeting}</span>
                    <h1 className="name">{name}</h1>
                    <p className="description">{description}</p>
                </div>
            </div>
        </section>
    );
}; 