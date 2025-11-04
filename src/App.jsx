import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Activities from './components/Activities.jsx';
import Connect from './components/Connect.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Hero />
      <About />
      <Activities />
      <Connect />
    </div>
  );
}

export default App;
