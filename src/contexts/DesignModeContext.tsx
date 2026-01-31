import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type DesignMode = 'blueprint' | 'launch';

interface DesignModeContextType {
  mode: DesignMode;
  toggleMode: () => void;
  isLaunchMode: boolean;
  isBlueprintMode: boolean;
}

const DesignModeContext = createContext<DesignModeContextType | undefined>(undefined);

export const DesignModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<DesignMode>('blueprint');

  const toggleMode = () => {
    setMode(prev => prev === 'blueprint' ? 'launch' : 'blueprint');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'launch') {
      root.classList.add('launch-mode');
      document.body.classList.add('launch-mode');
    } else {
      root.classList.remove('launch-mode');
      document.body.classList.remove('launch-mode');
    }
  }, [mode]);

  return (
    <DesignModeContext.Provider
      value={{
        mode,
        toggleMode,
        isLaunchMode: mode === 'launch',
        isBlueprintMode: mode === 'blueprint',
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
