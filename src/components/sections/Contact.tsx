import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Download, Award } from 'lucide-react';

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
          className={`blueprint-container p-6 mb-12 ${isLaunchMode ? 'glass-card' : ''}`}
          style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            <Award size={20} className={isLaunchMode ? 'text-primary' : ''} />
            {isBlueprintMode ? '// CERTIFICATIONS' : 'Certifications & Achievements'}
          </h3>
          
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={index} 
                className={`flex items-start gap-3 p-3 transition-colors duration-400 ease-in-out ${
                  isLaunchMode 
                    ? 'bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30' 
                    : 'border border-dashed border-foreground/20 hover:border-foreground/50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className={`mt-0.5 ${isLaunchMode ? 'text-primary' : 'text-foreground'}`}>
                  {isBlueprintMode ? '→' : '◆'}
                </span>
                <div className="flex-1">
                  <span className={`font-medium ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                    {achievement.title}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-sm ${isLaunchMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                      {achievement.issuer}
                    </span>
                    {achievement.verifyUrl && (
                      <a
                        href={achievement.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs transition-colors duration-400 ease-in-out ${
                          isLaunchMode 
                            ? 'text-primary hover:text-accent' 
                            : 'text-foreground hover:text-muted-foreground underline'
                        }`}
                      >
                        {isBlueprintMode ? '[VERIFY]' : 'Verify'}
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                  {achievement.description && (
                    <p className={`text-xs mt-1 ${isLaunchMode ? 'text-gray-500' : 'text-muted-foreground'}`}>
                      {achievement.description}
                    </p>
                  )}
                </div>
              </motion.li>
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
          
          <p className={`mb-8 max-w-lg mx-auto ${isLaunchMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
            {isBlueprintMode 
              ? '/* Ready to discuss opportunities and collaborate on exciting projects */'
              : "I'm always open to discussing new opportunities and innovative projects."
            }
          </p>

          {/* Resume Download */}
          <motion.a
            href={personal.resumeUrl}
            download
            className={`inline-flex items-center gap-2 px-8 py-4 font-medium text-lg mb-8 transition-all duration-400 ease-in-out ${
              isLaunchMode 
                ? 'bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_hsl(180,100%,50%,0.4)]' 
                : 'border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            {isBlueprintMode ? '[DOWNLOAD_RESUME]' : 'Download Resume'}
          </motion.a>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'PHONE' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider blueprint-container glow-hover transition-all duration-400 ease-in-out ${
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
          <p className={`text-sm font-mono ${isLaunchMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
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
        <p className={`text-xs font-mono ${isLaunchMode ? 'text-gray-500' : 'text-muted-foreground'}`}>
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
