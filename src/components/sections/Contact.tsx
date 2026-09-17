import { useDesignMode } from '@/contexts/DesignModeContext';
import CodeBlock from '@/components/dev/CodeBlock';
import ContactContent from './content/ContactContent';
import contactSource from './content/ContactContent.tsx?raw';

const Contact = () => {
  const { isCodeMode } = useDesignMode();

  return (
    <section id="contact">
      {isCodeMode ? <CodeBlock fileName="Contact.tsx" code={contactSource} /> : <ContactContent />}
    </section>
  );
};

export default Contact;
