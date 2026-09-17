import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import ProjectsContent from './content/ProjectsContent';
import projectsSource from './content/ProjectsContent.tsx?raw';

const Projects = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="projects">
      {isCodeMode ? (
        <CodeBlock fileName="Projects.tsx" code={projectsSource} />
      ) : (
        <ProjectsContent />
      )}
    </section>
  );
};

export default Projects;
