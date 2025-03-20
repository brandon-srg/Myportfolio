import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Grid } from '../../ui/Grid/Grid';
import { Card } from '../../ui/Card/Card';
import './Skills.css';

export const Skills = ({ title, skills }) => {
    return (
        <section className="skills">
            <SectionTitle>{title}</SectionTitle>
            <Grid columns="auto-fit" minWidth="250px">
                {skills.map((skill, index) => (
                    <Card key={index}>
                        <div className="skill-icon">
                            {skill.icon}
                        </div>
                        <h3>{skill.name}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </Card>
                ))}
            </Grid>
        </section>
    );
}; 