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
              Computer Scientist and Engineer focused on low-level development. Skilled in embedded systems, Linux 
              server administration, and networking. Experienced in time synchronization technologies such as White 
              Rabbit, PTP, and NTP. Currently working as an Embedded Software Engineer at Safran Electronics & 
              Defense while pursuing a Master's degree in Data Science & Computer Engineering.
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
          <p>MIT License {new Date().getFullYear()}. Ángel Hurtado Flores. This webpage was last updated on December 2024.</p>
        </div>
      </footer>
    </div>
  );
}