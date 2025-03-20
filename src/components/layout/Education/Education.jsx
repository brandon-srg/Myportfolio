import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Grid } from '../../ui/Grid/Grid';
import { Card } from '../../ui/Card/Card';
import './Education.css';

export const Education = ({ title, education }) => {
    return (
        <section className="education">
            <SectionTitle>{title}</SectionTitle>
            <Grid columns="auto-fit" minWidth="300px">
                {education.map((edu, index) => (
                    <Card key={index}>
                        <div className="education-header">
                            <h3>{edu.title}</h3>
                            <span className="education-date">{edu.date}</span>
                        </div>
                        <p className="education-institution">{edu.institution}</p>
                        <p className="education-description">{edu.description}</p>
                    </Card>
                ))}
            </Grid>
        </section>
    );
}; 