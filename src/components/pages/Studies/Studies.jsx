import React from 'react';
import { Education } from '../../layout/Education/Education';
import './Studies.css';

export const Studies = () => {
    const educationData = {
        title: "Estudios",
        education: [
            {
                title: "Bachiller Técnico en Análisis y Programación de Software",
                date: "2023",
                institution: "Colegio Marcelino Champagnat",
                description: "Formación técnica en desarrollo de software y programación básica."
            },
            {
                title: "Tecnólogo en Análisis y Programación de Software",
                date: "2024 - Presente",
                institution: "SENA",
                description: "Formación tecnológica en desarrollo de software, bases de datos y metodologías ágiles."
            }
        ]
    };

    return (
        <div className="studies">
            <Education {...educationData} />
        </div>
    );
}; 