import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { Pencil, Sparkles } from 'lucide-react';

const DesignToggle = () => {
  const { mode, toggleMode, isLaunchMode } = useDesignMode();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <AnimatePresence mode="wait">
        {isCollapsed ? (
          // Collapsed circular button
          <motion.button
            key="collapsed"
            onClick={toggleMode}
            className="relative flex items-center justify-center w-12 h-12 rounded-full glow-hover"
            style={{
              background: isLaunchMode ? 'var(--glass-bg)' : 'hsl(var(--background))',
              backdropFilter: isLaunchMode ? 'blur(20px)' : 'none',
              border: isLaunchMode ? '1px solid var(--glass-border)' : '2px dashed hsl(var(--foreground))',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mode === 'blueprint' ? (
              <Pencil className="w-5 h-5 text-foreground" />
            ) : (
              <Sparkles className="w-5 h-5 text-primary" />
            )}
          </motion.button>
        ) : (
          // Expanded toggle with labels
          <motion.button
            key="expanded"
            onClick={toggleMode}
            className="relative flex items-center gap-3 px-4 py-2 blueprint-container rounded-lg glow-hover"
            style={{
              background: isLaunchMode ? 'var(--glass-bg)' : 'hsl(var(--background))',
              backdropFilter: isLaunchMode ? 'blur(20px)' : 'none',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Blueprint Label */}
            <span className="section-label -top-2 left-2">&lt;button&gt;</span>
            
            <span className={`text-xs font-mono uppercase tracking-wider ${
              mode === 'blueprint' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              Low-Fi
            </span>
            
            {/* Toggle Track */}
            <div className="relative w-14 h-7 bg-secondary rounded-lg overflow-hidden blueprint-container">
              {/* Scan line effect for Launch mode */}
              {isLaunchMode && (
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                  initial={{ y: '-100%' }}
                  animate={{ y: '800%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                />
              )}
              
              {/* Toggle Knob */}
              <motion.div
                className="absolute top-0.5 w-6 h-6 bg-foreground rounded-md flex items-center justify-center"
                animate={{
                  left: mode === 'blueprint' ? '2px' : '30px',
                  borderRadius: isLaunchMode ? '9999px' : '4px',
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  boxShadow: isLaunchMode ? 'var(--glow-primary)' : 'none',
                }}
              >
                {mode === 'blueprint' ? (
                  <Pencil className="w-3 h-3 text-background" />
                ) : (
                  <Sparkles className="w-3 h-3 text-primary-foreground" />
                )}
              </motion.div>
            </div>
            
            <span className={`text-xs font-mono uppercase tracking-wider ${
              mode === 'launch' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              High-Fi
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignToggle;
