import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { highlightKeywords } from '@/lib/highlight-keywords';
import { Github } from 'lucide-react';
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

const KEYWORDS = [
  'React', 'React.js', 'Node.js', 'Express.js', 'AWS', 'S3', 'RDS', 'CloudFront',
  'Azure', 'OpenAI', 'MSSQL', 'MySQL', 'Python', 'PyTorch', 'NumPy', 'ResNet',
  'Deep Learning', 'Agentic AI', 'Copilot Studio',
];

type Project = (typeof portfolioData.projects)[number];

const ProjectsContent = () => {
  const { projects } = portfolioData;
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className="text-left rounded-lg border border-border overflow-hidden hover:border-foreground/30 transition-colors"
            >
              <img
                src={projectImages[project.image]}
                alt={project.name}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-medium text-foreground">{project.name}</h3>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {project.period.split(' – ')[0]}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selected && (
            <ScrollArea className="max-h-[85vh]">
              <div className="p-6 space-y-6">
                <DialogHeader className="pr-8">
                  <DialogTitle className="text-xl">{selected.name}</DialogTitle>
                  <DialogDescription>{selected.period}</DialogDescription>
                </DialogHeader>

                <img
                  src={projectImages[selected.image]}
                  alt={selected.name}
                  className="w-full aspect-video object-cover rounded-lg"
                />

                <div>
                  <h4 className="font-medium mb-2">Key highlights</h4>
                  <ul className="space-y-2">
                    {selected.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm leading-relaxed text-muted-foreground pl-4 relative before:content-['–'] before:absolute before:left-0">
                        {highlightKeywords(highlight, KEYWORDS)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selected.githubUrl && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    <Github size={16} />
                    View code
                  </a>
                )}
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsContent;
