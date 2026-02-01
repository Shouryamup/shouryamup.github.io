import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { Home, Briefcase, FolderKanban, Code2, Mail, User, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'inspirations', label: 'Inspirations', icon: Sparkles },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navigation = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const [activeSection, setActiveSection] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);

      // Determine active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 ${
            isLaunchMode ? 'glass-card' : 'blueprint-container bg-background'
          }`}
          style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="p-2">
            {/* Expand/Collapse indicator */}
            <motion.button
              className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full ${
                isLaunchMode 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-foreground text-background'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
            </motion.button>

            <ul className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;

                return (
                  <motion.li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-3 px-3 py-2 w-full text-left transition-all duration-400 ease-in-out ${
                        isActive
                          ? isLaunchMode
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground bg-foreground/10'
                          : isLaunchMode
                            ? 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                            : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                      }`}
                      style={{ borderRadius: isLaunchMode ? '8px' : '0' }}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      <AnimatePresence mode="wait">
                        {isExpanded && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`text-sm font-medium whitespace-nowrap overflow-hidden ${
                              isBlueprintMode ? 'font-mono' : ''
                            }`}
                          >
                            {isBlueprintMode ? `[${section.id.toUpperCase()}]` : section.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
