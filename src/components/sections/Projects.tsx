import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';
import projectIntellibank from '@/assets/project-intellibank.jpg';
import projectGatorhive from '@/assets/project-gatorhive.jpg';
import projectAsl from '@/assets/project-asl.jpg';

const projectImages: Record<string, string> = {
  intellibank: projectIntellibank,
  gatorhive: projectGatorhive,
  asl: projectAsl,
};

const Projects = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { projects } = portfolioData;

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
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-gradient' : ''}`}>
            {isBlueprintMode ? '// FEATURED_PROJECTS' : 'Projects'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`blueprint-container overflow-hidden rounded-lg ${isLaunchMode ? 'glass-card glow-hover' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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
                  <h3 className="text-lg font-bold">
                    {isBlueprintMode ? `[${project.id.toUpperCase()}] ` : ''}{project.name}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">{project.period.split(' – ')[0]}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className={`text-xs px-2 py-1 font-mono ${
                        isLaunchMode 
                          ? 'skill-badge' 
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default Projects;
