import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';
import { Github, ChevronRight } from 'lucide-react';
import projectIntellibank from '@/assets/project-intellibank.jpg';
import projectGatorhive from '@/assets/project-gatorhive.jpg';
import projectAsl from '@/assets/project-asl.jpg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const projectImages: Record<string, string> = {
  intellibank: projectIntellibank,
  gatorhive: projectGatorhive,
  asl: projectAsl,
};

// Keywords to highlight on hover
const KEYWORDS = [
  'React', 'React.js', 'Node.js', 'Express.js', 'AWS', 'S3', 'RDS', 'CloudFront',
  'Azure', 'OpenAI', 'MSSQL', 'MySQL', 'Python', 'PyTorch', 'NumPy', 'ResNet',
  'Deep Learning', 'Agentic AI', 'Copilot Studio'
];

const highlightKeywords = (text: string, isHovered: boolean, isLaunchMode: boolean) => {
  const regex = new RegExp(`\\b(${KEYWORDS.join('|').replace(/\./g, '\\.')})\\b`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    const isKeyword = KEYWORDS.some(kw => kw.toLowerCase() === part.toLowerCase());
    if (isKeyword) {
      return (
        <span
          key={index}
          className={`font-semibold transition-colors duration-[400ms] ease-in-out ${
            isHovered 
              ? isLaunchMode ? 'text-primary' : 'text-foreground' 
              : ''
          }`}
        >
          {part}
        </span>
      );
    }
    return part;
  });
};

type Project = {
  id: string;
  name: string;
  tech: string[];
  period: string;
  description: string;
  image: string;
  githubUrl: string;
  highlights: string[];
};

const Projects = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { projects } = portfolioData;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative px-6 py-20" id="projects">
      <span className="section-label top-4 left-4">&lt;section id="projects"&gt;</span>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// FEATURED_PROJECTS' : 'Projects'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`blueprint-container overflow-hidden cursor-pointer ${isLaunchMode ? 'glass-card glow-hover' : ''}`}
              style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <span className="section-label top-2 left-2 z-10">&lt;article&gt;</span>
              
              {/* Project Image / Placeholder */}
              <div className="relative aspect-video">
                {isBlueprintMode ? (
                  <div className="asset-placeholder w-full h-full flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">X</span>
                    <span className="text-[10px] mt-1 uppercase">[ASSET_{project.id.toUpperCase()}]</span>
                  </div>
                ) : (
                  <>
                    <img
                      src={projectImages[project.image]}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                    {isBlueprintMode ? `[${project.id.toUpperCase()}] ` : ''}{project.name}
                  </h3>
                  <span className={`text-xs font-mono ${isLaunchMode ? 'text-primary' : 'text-muted-foreground'}`}>
                    {project.period.split(' – ')[0]}
                  </span>
                </div>

                <p className={`text-sm mb-4 line-clamp-3 ${isLaunchMode ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  {highlightKeywords(project.description, hoveredCard === project.id, isLaunchMode)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className={`text-xs px-2 py-1 font-mono transition-colors duration-[400ms] ease-in-out ${
                        isLaunchMode 
                          ? `skill-badge ${hoveredCard === project.id ? 'border-primary text-primary' : ''}` 
                          : 'border border-dashed border-foreground/30'
                      }`}
                    >
                      {isBlueprintMode ? `[${tech}]` : tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <div className={`flex items-center gap-2 text-sm font-medium transition-colors duration-[400ms] ease-in-out ${
                  isLaunchMode ? 'text-primary' : 'text-foreground'
                }`}>
                  <span>{isBlueprintMode ? '[VIEW_DETAILS]' : 'View Details'}</span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent
          className={`max-w-2xl overflow-hidden p-0 ${
            isLaunchMode ? 'bg-card border-primary/20' : ''
          }`}
        >
          {selectedProject && (
            <ScrollArea className="max-h-[85vh]">
              <div className="space-y-6 p-6">
                <DialogHeader className="pr-8">
                  <DialogTitle className={`text-2xl ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className={isLaunchMode ? 'text-gray-400' : ''}>
                    {selectedProject.period}
                  </DialogDescription>
                </DialogHeader>

                <div className="relative aspect-video overflow-hidden rounded-lg">
                  {isBlueprintMode ? (
                    <div className="asset-placeholder flex h-full w-full flex-col items-center justify-center">
                      <span className="text-4xl font-bold">X</span>
                      <span className="mt-2 text-xs uppercase">[ASSET_{selectedProject.id.toUpperCase()}]</span>
                    </div>
                  ) : (
                    <img
                      src={projectImages[selectedProject.image]}
                      alt={selectedProject.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className={`mb-3 text-lg font-semibold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                      {isBlueprintMode ? '/* KEY_HIGHLIGHTS */' : 'Key Highlights'}
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className={`flex items-start gap-3 text-sm leading-relaxed ${isLaunchMode ? 'text-gray-300' : 'text-muted-foreground'}`}
                        >
                          <span
                            className={`mt-1.5 h-2 w-2 flex-shrink-0 ${
                              isLaunchMode ? 'rounded-full bg-primary' : 'bg-foreground'
                            }`}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`mb-2 text-lg font-semibold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                      {isBlueprintMode ? '/* TECH_STACK */' : 'Technologies'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className={`text-xs px-3 py-1 font-mono ${
                            isLaunchMode
                              ? 'skill-badge border-primary/30 text-primary'
                              : 'border border-dashed border-foreground/30'
                          }`}
                        >
                          {isBlueprintMode ? `[${tech}]` : tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-border pt-4">
                    {selectedProject.githubUrl !== undefined && (
                      <a
                        href={selectedProject.githubUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-[400ms] ease-in-out ${
                          isLaunchMode
                            ? 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 rounded-lg'
                            : 'border border-dashed border-foreground hover:bg-foreground/10'
                        } ${!selectedProject.githubUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={(e) => !selectedProject.githubUrl && e.preventDefault()}
                      >
                        <Github size={16} />
                        {isBlueprintMode ? '[VIEW_CODE]' : 'View Code'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default Projects;
