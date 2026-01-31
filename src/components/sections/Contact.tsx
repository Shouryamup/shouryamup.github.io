import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';

const Contact = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { personal, achievements } = portfolioData;

  const socialLinks = [
    { label: 'EMAIL', href: `mailto:${personal.email}`, display: personal.email },
    { label: 'LINKEDIN', href: `https://${personal.linkedin}`, display: personal.linkedin },
    { label: 'PHONE', href: `tel:${personal.phone}`, display: personal.phone },
  ];

  return (
    <section className="relative px-6 py-20" id="contact">
      <span className="section-label top-4 left-4">&lt;section id="contact"&gt;</span>
      
      <div className="max-w-4xl mx-auto">
        {/* Certifications */}
        <motion.div
          className={`blueprint-container p-6 rounded-lg mb-12 ${isLaunchMode ? 'glass-card' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-sm font-mono mb-4 ${isLaunchMode ? 'text-primary' : 'text-muted-foreground'}`}>
            {isBlueprintMode ? '// CERTIFICATIONS' : 'Certifications & Achievements'}
          </h3>
          
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <span className={`mt-1 ${isLaunchMode ? 'text-primary' : 'text-foreground'}`}>
                  {isBlueprintMode ? '→' : '◆'}
                </span>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// INITIATE_CONTACT' : "Let's Connect"}
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            {isBlueprintMode 
              ? '/* Ready to discuss opportunities and collaborate on exciting projects */'
              : "I'm always open to discussing new opportunities and innovative projects."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'PHONE' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider blueprint-container glow-hover ${
                  isLaunchMode 
                    ? 'glass-card rounded-lg hover:border-primary/50' 
                    : ''
                }`}
              >
                <span className="section-label -top-2 left-1">&lt;a&gt;</span>
                {isBlueprintMode ? `[ ${link.label} ]` : link.label}
              </a>
            ))}
          </div>

          {/* Location */}
          <p className="text-sm text-muted-foreground font-mono">
            {isBlueprintMode 
              ? `// LOCATION: ${personal.location}` 
              : `📍 ${personal.location}`
            }
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-20 pt-8 border-t border-border text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label top-2 left-4">&lt;footer&gt;</span>
        <p className="text-xs text-muted-foreground font-mono">
          {isBlueprintMode 
            ? `/* ${personal.name} © ${new Date().getFullYear()} | Built with React + TypeScript */`
            : `© ${new Date().getFullYear()} ${personal.name}. Crafted with precision.`
          }
        </p>
      </motion.footer>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default Contact;
