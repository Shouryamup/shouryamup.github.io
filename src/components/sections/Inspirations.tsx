import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import InspirationsContent from './content/InspirationsContent';
import inspirationsSource from './content/InspirationsContent.tsx?raw';

const Inspirations = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="inspirations">
      {isCodeMode ? (
        <CodeBlock fileName="Inspirations.tsx" code={inspirationsSource} />
      ) : (
        <InspirationsContent />
      )}
    </section>
  );
};

export default Inspirations;
