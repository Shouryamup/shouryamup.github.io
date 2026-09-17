import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import AboutContent from './content/AboutContent';
import aboutSource from './content/AboutContent.tsx?raw';

const About = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="about">
      {isCodeMode ? <CodeBlock fileName="About.tsx" code={aboutSource} /> : <AboutContent />}
    </section>
  );
};

export default About;
