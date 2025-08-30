import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FloatingCTA from './components/FloatingCTA';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkshopsPage from './pages/WorkshopsPage';
import LearningHubPage from './pages/LearningHubPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/learning-hub" element={<LearningHubPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;