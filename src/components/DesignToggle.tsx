import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';

const DesignToggle = () => {
  const { mode, toggleMode, isLaunchMode } = useDesignMode();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMode}
        className="relative flex items-center gap-3 px-4 py-2 blueprint-container rounded-lg glow-hover"
        style={{
          background: isLaunchMode ? 'var(--glass-bg)' : 'hsl(var(--background))',
          backdropFilter: isLaunchMode ? 'blur(20px)' : 'none',
        }}
      >
        {/* Blueprint Label */}
        <span className="section-label -top-2 left-2">&lt;button&gt;</span>
        
        <span className={`text-xs font-mono uppercase tracking-wider ${
          mode === 'blueprint' ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          Blueprint
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
              <svg className="w-3 h-3 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            )}
          </motion.div>
        </div>
        
        <span className={`text-xs font-mono uppercase tracking-wider ${
          mode === 'launch' ? 'text-foreground' : 'text-muted-foreground'
        }`}>
          Launch
        </span>
      </button>
    </div>
  );
};

export default DesignToggle;
