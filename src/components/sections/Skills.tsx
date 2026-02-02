import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';

// Tech logo URLs from CDN (devicons/skillicons)
const techLogos: Record<string, string> = {
  // Languages
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MATLAB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
  // Frontend
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  // Backend
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'RESTful APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'DynamoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  // Cloud
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

const Skills = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { skills } = portfolioData;

  const skillCategories = [
    { label: 'LANGUAGES', key: 'languages' as const },
    { label: 'FRONTEND', key: 'frontend' as const },
    { label: 'BACKEND', key: 'backend' as const },
    { label: 'CLOUD_DEVOPS', key: 'cloud' as const },
  ];

  return (
    <section className="relative px-6 py-20" id="skills">
      <span className="section-label top-4 left-4">&lt;section id="skills"&gt;</span>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// TECHNICAL_SKILLS' : 'Skills'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              className={`blueprint-container p-6 rounded-lg ${isLaunchMode ? 'glass-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <span className="section-label -top-2 left-2">&lt;div class="skill-group"&gt;</span>
              
              <h3 className={`text-sm font-mono mb-4 ${isLaunchMode ? 'text-primary' : 'text-muted-foreground'}`}>
                {isBlueprintMode ? `// ${category.label}` : category.label.replace('_', ' & ')}
              </h3>

              {isBlueprintMode ? (
                // Blueprint: Raw checklist (no icons)
                <ul className="space-y-2 font-mono text-sm">
                  {skills[category.key].map((skill, index) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="text-muted-foreground">[{String(index).padStart(2, '0')}]</span>
                      <span className="text-foreground">{skill}</span>
                      <span className="text-muted-foreground ml-auto">✓</span>
                    </li>
                  ))}
                </ul>
              ) : (
                // Launch: Animated pill badges with real tech logos
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-badge inline-flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {techLogos[skill] && (
                        <img 
                          src={techLogos[skill]} 
                          alt={skill} 
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      {skill}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default Skills;
