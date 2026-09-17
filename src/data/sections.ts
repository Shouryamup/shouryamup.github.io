import { Home, User, Briefcase, FolderKanban, Code2, Sparkles, Mail, LucideIcon } from 'lucide-react';

export interface SiteSection {
  id: string;
  label: string;
  fileName: string;
  icon: LucideIcon;
}

export const siteSections: SiteSection[] = [
  { id: 'hero', label: 'Home', fileName: 'Hero.tsx', icon: Home },
  { id: 'about', label: 'About', fileName: 'About.tsx', icon: User },
  { id: 'experience', label: 'Experience', fileName: 'Experience.tsx', icon: Briefcase },
  { id: 'projects', label: 'Projects', fileName: 'Projects.tsx', icon: FolderKanban },
  { id: 'skills', label: 'Skills', fileName: 'Skills.tsx', icon: Code2 },
  { id: 'inspirations', label: 'Inspirations', fileName: 'Inspirations.tsx', icon: Sparkles },
  { id: 'contact', label: 'Contact', fileName: 'Contact.tsx', icon: Mail },
];
