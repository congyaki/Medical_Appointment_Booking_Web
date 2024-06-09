import React from 'react';
import './App.scss';
import Header from '../components/HomePage/Header.js';
import HeroSection from '../components/HomePage/HeroSection.js';
import FindDoctor from '../components/HomePage/FindDoctor.js';
import Results from '../components/HomePage/Results.js';
import Choose from '../components/HomePage/Choose.js';
import Services from '../components/HomePage/Services.js';
import Footer from '../components/HomePage/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FindDoctor />
      <Results />
      <Choose />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
