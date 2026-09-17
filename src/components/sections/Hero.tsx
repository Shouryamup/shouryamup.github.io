import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import HeroContent from './content/HeroContent';
import heroSource from './content/HeroContent.tsx?raw';

const Hero = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="hero">
      {isCodeMode ? <CodeBlock fileName="Hero.tsx" code={heroSource} /> : <HeroContent />}
    </section>
  );
};

export default Hero;
