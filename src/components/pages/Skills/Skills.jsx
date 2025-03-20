import React from 'react';
import { Skills as SkillsSection } from '../../layout/Skills/Skills';
import './Skills.css';

export const Skills = () => {
    const skillsData = {
        title: "Habilidades",
        skills: [
            {
                name: "Frontend",
                description: "HTML, CSS, React, JavaScript",
                icon: "🎨"
            },
            {
                name: "Backend",
                description: "C#, TypeScript",
                icon: "⚙️"
            },
            {
                name: "Control de Versiones",
                description: "Git, GitHub",
                icon: "📦"
            }
        ]
    };

    return (
        <div className="skills-page">
            <SkillsSection {...skillsData} />
        </div>
    );
}; 