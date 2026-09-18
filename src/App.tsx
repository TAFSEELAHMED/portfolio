import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsEcosystem from './components/SkillsEcosystem';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import AiLab from './components/AiLab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Spatial3DBackground from './components/Spatial3DBackground';
import ResumeModal from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#FAF5E8] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Fully Spatial 3D Rotatable Background */}
      <Spatial3DBackground />

      {/* Sticky Minimal Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <SkillsEcosystem />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <Achievements />
        <Education onOpenResume={() => setIsResumeOpen(true)} />
        <AiLab />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* In-App Resume & PDF Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
