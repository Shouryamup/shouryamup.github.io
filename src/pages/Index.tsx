import { DesignModeProvider } from '@/contexts/DesignModeContext';
import DesignToggle from '@/components/DesignToggle';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <DesignModeProvider>
      <div className="min-h-screen">
        <DesignToggle />
        
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </DesignModeProvider>
  );
};

export default Index;
