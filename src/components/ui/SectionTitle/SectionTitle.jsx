import React from 'react';
import './SectionTitle.css';

export const SectionTitle = ({ children, className = '' }) => {
    return (
        <h2 className={`section-title ${className}`}>
            {children}
        </h2>
    );
}; 