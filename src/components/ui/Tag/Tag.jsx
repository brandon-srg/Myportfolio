import React from 'react';
import './Tag.css';

export const Tag = ({ children, className = '' }) => {
    return (
        <span className={`tag ${className}`}>
            {children}
        </span>
    );
}; 