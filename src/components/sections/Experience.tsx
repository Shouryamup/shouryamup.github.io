import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import ExperienceContent from './content/ExperienceContent';
import experienceSource from './content/ExperienceContent.tsx?raw';

const Experience = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="experience">
      {isCodeMode ? (
        <CodeBlock fileName="Experience.tsx" code={experienceSource} />
      ) : (
        <ExperienceContent />
      )}
    </section>
  );
};

export default Experience;
