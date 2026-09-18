import { useState } from 'react';
import { Menu, FileCode2, FileText } from 'lucide-react';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { useActiveSection } from '@/hooks/use-active-section';
import { siteSections, SiteSection } from '@/data/sections';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import CommandPalette from './CommandPalette';

const codeFiles: SiteSection[] = [
  { id: 'readme', label: 'Readme', fileName: 'README.md', icon: FileText },
  ...siteSections,
];

const ModeToggle = () => {
  const { mode, toggleMode } = useDesignMode();
  return (
    <button
      onClick={toggleMode}
      aria-label={mode === 'code' ? 'Switch to the rendered site' : 'Switch to the source code'}
      className="flex items-center gap-1 rounded-md overflow-hidden border border-[#3c3c3c] font-mono text-[11px] shadow-sm"
    >
      <span className={`px-2.5 py-1.5 flex items-center gap-1.5 ${mode === 'code' ? 'bg-[#007acc] text-white' : 'bg-[#252526] text-[#969696]'}`}>
        <FileCode2 size={12} /> code
      </span>
      <span className={`px-2.5 py-1.5 flex items-center gap-1.5 ${mode === 'live' ? 'bg-[#1a936f] text-white' : 'bg-[#252526] text-[#969696]'}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current" /> localhost:3000
      </span>
    </button>
  );
};

const FileTree = ({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) => (
  <nav className="py-3">
    <h5 className="px-4 mb-2 text-[11px] tracking-wide text-[#bbbbbb]">portfolio</h5>
    {codeFiles.map((section) => {
      const Icon = section.icon;
      const isActive = section.id === activeId;
      return (
        <button
          key={section.id}
          onClick={() => onSelect(section.id)}
          className={`w-full flex items-center gap-2 px-4 py-1.5 text-[13px] text-left ${
            isActive ? 'bg-[#04395e] text-white' : 'text-[#cccccc] hover:bg-white/5'
          }`}
        >
          <Icon size={14} className="shrink-0" />
          {section.fileName}
        </button>
      );
    })}
  </nav>
);

const SiteChrome = () => {
  const { isCodeMode } = useDesignMode();
  const { activeId, scrollToSection } = useActiveSection(isCodeMode ? codeFiles : siteSections);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {!isCodeMode && <CommandPalette />}
        <ModeToggle />
      </div>

      {isCodeMode ? (
        <>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open file explorer"
                className="md:hidden fixed top-4 left-4 z-50 w-9 h-9 flex items-center justify-center rounded-md bg-[#252526] border border-[#3c3c3c] text-[#cccccc]"
              >
                <Menu size={16} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-[#252526] border-[#3c3c3c] p-0 text-white">
              <SheetTitle className="sr-only">File explorer</SheetTitle>
              <FileTree activeId={activeId} onSelect={handleSelect} />
            </SheetContent>
          </Sheet>
          <aside className="hidden md:block fixed top-0 left-0 bottom-0 w-52 bg-[#252526] border-r border-[#3c3c3c] overflow-y-auto z-40">
            <FileTree activeId={activeId} onSelect={handleSelect} />
          </aside>
        </>
      ) : (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open section menu"
              className="fixed top-4 left-4 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border shadow-sm text-foreground"
            >
              <Menu size={18} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetTitle className="text-sm mb-4">Jump to section</SheetTitle>
            <nav className="space-y-1">
              {siteSections.map((section) => {
                const Icon = section.icon;
                const isActive = section.id === activeId;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSelect(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-left ${
                      isActive ? 'bg-[#e8f5ef] text-[#1a936f] font-medium' : 'text-[#555] hover:bg-[#f5f5f4]'
                    }`}
                  >
                    <Icon size={16} />
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default SiteChrome;
