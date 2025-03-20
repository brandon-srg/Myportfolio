import React from 'react';
import { Hero } from '../../layout/Hero/Hero';
import { About } from '../../layout/About/About';
import miphotoUrl from '../../../assets/miphoto.jpg?url';
import './Home.css';

export const Home = () => {
    const heroData = {
        image: miphotoUrl,
        greeting: "¡Hola! Soy",
        name: "Brandon Steve Rubiano Gil",
        description: "Desarrollador Full Stack con especialización en frontend y análisis de datos. Transformo ideas en aplicaciones web robustas y experiencias de usuario excepcionales."
    };

    const aboutData = {
        title: "Sobre Mí",
        description: "Soy un desarrollador apasionado y metódico, con una fuerte capacidad de análisis y resolución de problemas. Mi enfoque en el detalle y mi creatividad me permiten encontrar soluciones innovadoras. Me destaco por mi capacidad de aprendizaje rápido, mi trabajo en equipo y mi compromiso con la calidad en cada proyecto."
    };

    return (
        <div className="home">
            <Hero {...heroData} />
            <About {...aboutData} />
        </div>
    );
}; 