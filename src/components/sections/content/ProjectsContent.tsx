import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { highlightKeywords } from '@/lib/highlight-keywords';
import { useSpotlight } from '@/hooks/use-spotlight';
import { Github, ArrowUpRight } from 'lucide-react';
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
  const [featured, ...rest] = projects;

  const Card = ({ project, tall = false }: { project: Project; tall?: boolean }) => {
    const spotlight = useSpotlight<HTMLButtonElement>();
    return (
    <button
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      onClick={() => setSelected(project)}
      className="spotlight-card group relative text-left rounded-2xl overflow-hidden border border-border bg-card hover:border-foreground/20 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col"
    >
      <div className={`relative overflow-hidden ${tall ? 'aspect-[16/10]' : 'aspect-video'}`}>
        <img
          src={projectImages[project.image]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="text-[11px] px-2 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{project.name}</h3>
          <ArrowUpRight size={16} className="text-muted-foreground shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <span className="text-tabular text-xs text-muted-foreground mt-0.5">{project.period}</span>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
      </div>
    </button>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <Card project={featured} tall />
          </div>
          {rest.map((project) => (
            <Card key={project.id} project={project} />
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
