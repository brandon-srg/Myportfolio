import React from 'react';
import './ProgressBar.css';

export const ProgressBar = ({ progress, className = '' }) => {
    return (
        <div className={`progress-bar ${className}`}>
            <div 
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}; 