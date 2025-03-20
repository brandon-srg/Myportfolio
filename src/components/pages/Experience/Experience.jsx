import React from 'react';
import { Experience as ExperienceSection } from '../../layout/Experience/Experience';
import './Experience.css';

export const Experience = () => {
    const experienceData = {
        title: "Experiencia",
        experiences: [
            {
                title: "Sin experiencia laboral",
                date: "Presente",
                company: "En búsqueda de oportunidades",
                description: "Actualmente me encuentro en búsqueda de mi primera experiencia laboral en el campo del desarrollo de software. Estoy preparado para aplicar mis conocimientos técnicos y aprender en un entorno profesional."
            }
        ]
    };

    return (
        <div className="experience-page">
            <ExperienceSection {...experienceData} />
        </div>
    );
}; 