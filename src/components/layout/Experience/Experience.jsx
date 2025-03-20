import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Grid } from '../../ui/Grid/Grid';
import { Card } from '../../ui/Card/Card';
import { Tag } from '../../ui/Tag/Tag';
import './Experience.css';

export const Experience = ({ title, experiences }) => {
    return (
        <section className="experience">
            <SectionTitle>{title}</SectionTitle>
            <Grid columns="auto-fit" minWidth="300px">
                {experiences.map((exp, index) => (
                    <Card key={index} className="experience-card">
                        <div className="card-header">
                            <h3>{exp.title}</h3>
                            <span className="card-date">{exp.date}</span>
                        </div>
                        <p className="card-company">{exp.company}</p>
                        <p className="card-description">{exp.description}</p>
                        {exp.technologies && (
                            <div className="card-technologies">
                                {exp.technologies.map((tech, techIndex) => (
                                    <Tag key={techIndex}>
                                        {tech}
                                    </Tag>
                                ))}
                            </div>
                        )}
                    </Card>
                ))}
            </Grid>
        </section>
    );
}; 