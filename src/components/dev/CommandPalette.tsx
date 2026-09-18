import { useEffect, useState } from 'react';
import { Download, Mail, Linkedin, Phone, FileCode2, Command as CommandIcon } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { scrollToSection } from '@/hooks/use-active-section';
import { siteSections } from '@/data/sections';
import { portfolioData } from '@/data/portfolioData';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const { toggleMode } = useDesignMode();
  const { personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const run = (action: () => void) => {
    action();
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
      >
        <CommandIcon size={13} />
        <span>K</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 max-w-lg">
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <Command>
            <CommandInput placeholder="Jump to a section or take an action..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Sections">
                {siteSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <CommandItem
                      key={section.id}
                      onSelect={() => run(() => scrollToSection(section.id))}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {section.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandGroup heading="Actions">
                <CommandItem onSelect={() => run(toggleMode)}>
                  <FileCode2 className="mr-2 h-4 w-4" />
                  Toggle code / localhost view
                </CommandItem>
                <CommandItem onSelect={() => run(() => window.open(`mailto:${personal.email}`, '_self'))}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </CommandItem>
                <CommandItem onSelect={() => run(() => window.open(`https://${personal.linkedin}`, '_blank'))}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  Open LinkedIn
                </CommandItem>
                <CommandItem onSelect={() => run(() => window.open(personal.resumeUrl, '_blank'))}>
                  <Download className="mr-2 h-4 w-4" />
                  Download résumé
                </CommandItem>
                <CommandItem onSelect={() => run(() => window.open(`tel:${personal.phone}`, '_self'))}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {personal.phone}
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommandPalette;
