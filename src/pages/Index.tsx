import { DesignModeProvider, useDesignMode } from '@/contexts/DesignModeContext';
import SiteChrome from '@/components/dev/SiteChrome';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Inspirations from '@/components/sections/Inspirations';
import Contact from '@/components/sections/Contact';

const PageBody = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <div className={isCodeMode ? 'min-h-screen bg-[#1e1e1e] md:pl-52' : 'min-h-screen bg-white'}>
      <SiteChrome />
      <main className={isCodeMode ? 'max-w-3xl mx-auto px-4 py-8 pt-16 space-y-8' : 'pt-16'}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Inspirations />
        <Contact />
      </main>
    </div>
  );
};

const Index = () => (
  <DesignModeProvider>
    <PageBody />
  </DesignModeProvider>
);

export default Index;
