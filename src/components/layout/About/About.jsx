import React from 'react';
import './About.css';

export const About = ({ title, description }) => {
    return (
        <section className="about">
            <h2>{title}</h2>
            <div className="about-content">
                <p>{description}</p>
            </div>
        </section>
    );
}; 