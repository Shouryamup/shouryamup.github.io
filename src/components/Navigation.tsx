import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { Menu, Home, Briefcase, FolderKanban, Code2, Mail, User, Sparkles, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

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
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

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
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-4 z-40"
        >
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.button
                className={`flex items-center justify-center w-12 h-12 rounded-full glow-hover ${
                  isLaunchMode ? 'glass-card' : 'blueprint-container bg-background'
                }`}
                style={{
                  borderRadius: isLaunchMode ? '9999px' : '0',
                  border: isBlueprintMode ? '2px dashed hsl(var(--foreground))' : undefined,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu size={20} className="text-foreground" />
              </motion.button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className={`w-72 ${isLaunchMode ? 'glass-card border-l border-primary/20' : 'blueprint-container'}`}
            >
              <SheetTitle className={`text-lg font-semibold mb-6 ${isBlueprintMode ? 'font-mono' : ''}`}>
                {isBlueprintMode ? '[NAVIGATION]' : 'Navigation'}
              </SheetTitle>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-all duration-[400ms] ease-in-out ${
                        isActive
                          ? isLaunchMode
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground bg-foreground/10'
                          : isLaunchMode
                            ? 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                            : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                      }`}
                      style={{ borderRadius: isLaunchMode ? '8px' : '0' }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      <span className={`text-sm font-medium ${isBlueprintMode ? 'font-mono' : ''}`}>
                        {isBlueprintMode ? `[${section.id.toUpperCase()}]` : section.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={`ml-auto w-2 h-2 rounded-full ${
                            isLaunchMode ? 'bg-primary' : 'bg-foreground'
                          }`}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
