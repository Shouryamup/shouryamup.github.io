import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';
import headshot from '@/assets/headshot.jpg';

const Hero = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Blueprint section label */}
      <span className="section-label top-4 left-4">&lt;section id="hero"&gt;</span>
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
      
      <div className="max-w-5xl mx-auto blueprint-container p-8 md:p-12 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Headshot / Asset Placeholder */}
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {isBlueprintMode ? (
              <div className="asset-placeholder w-full h-full flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">X</span>
                <span className="text-xs mt-2 uppercase">[ASSET_HEADSHOT_01]</span>
              </div>
            ) : (
              <div className="relative w-full h-full rounded-lg overflow-hidden glass-card glow-hover">
                <img
                  src={headshot}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            )}
            <span className="section-label -bottom-6 left-0">&lt;img&gt;</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label -top-6 left-0">&lt;h1&gt;</span>
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${
                isLaunchMode ? 'text-gradient' : ''
              }`}>
                {personal.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                {personal.title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className={`text-lg md:text-xl mb-8 ${
                isLaunchMode ? 'text-foreground/80' : 'text-muted-foreground'
              }`}>
                {personal.headline}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href={`mailto:${personal.email}`}
                className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider blueprint-container glow-hover ${
                  isLaunchMode 
                    ? 'bg-primary text-primary-foreground rounded-lg' 
                    : 'bg-foreground text-background'
                }`}
              >
                <span className="section-label -top-3 left-1">&lt;a&gt;</span>
                {isBlueprintMode ? '[ CONTACT ]' : 'Get In Touch'}
              </a>
              
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider blueprint-container glow-hover ${
                  isLaunchMode 
                    ? 'glass-card text-foreground rounded-lg' 
                    : 'bg-background text-foreground'
                }`}
              >
                {isBlueprintMode ? '[ LINKEDIN ]' : 'LinkedIn →'}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
