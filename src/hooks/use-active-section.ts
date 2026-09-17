import { useEffect, useState } from 'react';

export interface SectionRef {
  id: string;
  label: string;
}

export const useActiveSection = (sections: SectionRef[]) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveId(sections[i].id);
          return;
        }
      }
      setActiveId(sections[0]?.id ?? '');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return { activeId, scrollToSection };
};
