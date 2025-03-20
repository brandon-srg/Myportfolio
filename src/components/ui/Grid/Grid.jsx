import React from 'react';
import './Grid.css';

export const Grid = ({ children, className = '', columns = 'auto-fit', minWidth = '300px' }) => {
    return (
        <div 
            className={`grid ${className}`}
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(${minWidth}, 1fr))`
            }}
        >
            {children}
        </div>
    );
}; 