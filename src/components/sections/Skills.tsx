import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import SkillsContent from './content/SkillsContent';
import skillsSource from './content/SkillsContent.tsx?raw';

const Skills = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="skills">
      {isCodeMode ? <CodeBlock fileName="Skills.tsx" code={skillsSource} /> : <SkillsContent />}
    </section>
  );
};

export default Skills;
