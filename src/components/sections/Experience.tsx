import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';

// Keywords to highlight on hover
const KEYWORDS = [
  'React', 'Node.js', 'Next.js', 'AWS', 'Lambda', 'DynamoDB', 'OpenSearch',
  'MySQL', 'Java', 'Spring Boot', 'Storybook', 'CloudFormation', 'CDK', 'CRON'
];

const highlightKeywords = (text: string, isHovered: boolean, isLaunchMode: boolean) => {
  const regex = new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'gi');
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

const Experience = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { experience } = portfolioData;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative px-6 py-20" id="experience">
      <span className="section-label top-4 left-4">&lt;section id="experience"&gt;</span>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label -top-4 left-0">&lt;h2&gt;</span>
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// WORK_EXPERIENCE' : 'Experience'}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-12 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Timeline dot */}
              <div className="timeline-dot top-1" />

              <div className={`blueprint-container p-6 rounded-lg ${isLaunchMode ? 'glass-card glow-hover' : ''}`}>
                <span className="section-label -top-2 left-2">&lt;div class="exp-card"&gt;</span>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                      {isBlueprintMode ? `[${exp.id.toUpperCase()}] ` : ''}{exp.title}
                    </h3>
                    <p className={`${isLaunchMode ? 'text-primary' : 'text-muted-foreground'}`}>
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className={`text-sm font-mono mt-2 md:mt-0 ${isLaunchMode ? 'text-primary' : 'text-muted-foreground'}`}>
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className={`flex items-start gap-2 text-sm ${isLaunchMode ? 'text-gray-300' : 'text-muted-foreground'}`}>
                      <span className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${
                        isLaunchMode ? 'rounded-full bg-primary' : 'bg-foreground'
                      }`} />
                      <span>
                        {highlightKeywords(highlight, hoveredCard === exp.id, isLaunchMode)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default Experience;
