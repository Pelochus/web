import { useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <section id="about" className="animate-fade-in">
          <div className="bg-white rounded-xl shadow-md p-8 backdrop-blur-sm bg-white/90">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Embedded Software Development Engineer at Amazon, focused on real-time media streaming and low-level
              systems. Experienced in C/C++20, Embedded Linux and real-time, performance-critical systems. 
              Skilled in time synchronization technologies, swarm robotics, and leveraging GenAI for development 
              efficiency.
            </p>
          </div>
        </section>

        <Resume />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>MIT License {new Date().getFullYear()}. Ángel Hurtado Flores. This webpage was last updated on June 2026.</p>
        </div>
      </footer>
    </div>
  );
}