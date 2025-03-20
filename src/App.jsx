import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './components/pages/Home/Home';
import { Studies } from './components/pages/Studies/Studies';
import { Experience } from './components/pages/Experience/Experience';
import { Skills } from './components/pages/Skills/Skills';
import './App.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/estudios" element={<Studies />} />
                <Route path="/experiencia" element={<Experience />} />
                <Route path="/habilidades" element={<Skills />} />
            </Routes>
        </Layout>
    );
}

export default App;


