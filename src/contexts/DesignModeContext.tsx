import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type DesignMode = 'code' | 'live';

interface DesignModeContextType {
  mode: DesignMode;
  toggleMode: () => void;
  isLiveMode: boolean;
  isCodeMode: boolean;
}

const DesignModeContext = createContext<DesignModeContextType | undefined>(undefined);

const STORAGE_KEY = 'design-mode';

const readStoredMode = (): DesignMode => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'live' ? 'live' : 'code';
  } catch {
    return 'code';
  }
};

export const DesignModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<DesignMode>(readStoredMode);

  const toggleMode = () => {
    setMode(prev => {
      const next = prev === 'code' ? 'live' : 'code';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable (private browsing, etc.) — mode just won't persist
      }
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.toggle('live-mode', mode === 'live');
    body.classList.toggle('live-mode', mode === 'live');
    root.classList.toggle('code-mode', mode === 'code');
    body.classList.toggle('code-mode', mode === 'code');
  }, [mode]);

  return (
    <DesignModeContext.Provider
      value={{
        mode,
        toggleMode,
        isLiveMode: mode === 'live',
        isCodeMode: mode === 'code',
      }}
    >
      {children}
    </DesignModeContext.Provider>
  );
};

export const useDesignMode = (): DesignModeContextType => {
  const context = useContext(DesignModeContext);
  if (!context) {
    throw new Error('useDesignMode must be used within a DesignModeProvider');
  }
  return context;
};
