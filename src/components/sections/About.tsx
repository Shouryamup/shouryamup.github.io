import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';
import headshot from '@/assets/headshot.jpg';

const About = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { personal, about } = portfolioData;

  return (
    <section className="relative px-6 py-20" id="about">
      <span className="section-label top-4 left-4">&lt;section id="about"&gt;</span>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// ABOUT_ME' : 'About Me'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`blueprint-container overflow-hidden ${isLaunchMode ? 'glass-card' : ''}`}
              style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
            >
              {isBlueprintMode ? (
                <div className="asset-placeholder aspect-square flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">X</span>
                  <span className="text-[10px] mt-2 uppercase">[ASSET_PROFILE]</span>
                </div>
              ) : (
                <img
                  src={headshot}
                  alt={personal.name}
                  className="w-full aspect-square object-cover"
                />
              )}
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`blueprint-container p-6 ${isLaunchMode ? 'glass-card' : ''}`}
              style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
            >
              <span className="section-label -top-2 left-2">&lt;p class="bio"&gt;</span>
              <p className={`text-lg leading-relaxed ${isLaunchMode ? 'text-gray-300' : 'text-muted-foreground'}`}>
                {about.bio}
              </p>
            </div>

            {/* Core Values */}
            <div className={`blueprint-container p-6 ${isLaunchMode ? 'glass-card' : ''}`}
              style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
            >
              <span className="section-label -top-2 left-2">&lt;ul class="values"&gt;</span>
              <h3 className={`text-lg font-bold mb-4 ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                {isBlueprintMode ? '/* CORE_VALUES */' : 'Core Values'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {about.values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-3 p-3 ${
                      isLaunchMode 
                        ? 'bg-primary/5 rounded-lg border border-primary/20' 
                        : 'border border-dashed border-foreground/30'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <span className={`text-xl ${isLaunchMode ? 'text-primary' : 'text-foreground'}`}>
                      {value.icon}
                    </span>
                    <div>
                      <h4 className={`font-semibold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                        {value.title}
                      </h4>
                      <p className={`text-sm ${isLaunchMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Background Summary */}
            <div className={`blueprint-container p-6 ${isLaunchMode ? 'glass-card' : ''}`}
              style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
            >
              <span className="section-label -top-2 left-2">&lt;div class="background"&gt;</span>
              <h3 className={`text-lg font-bold mb-3 ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                {isBlueprintMode ? '/* BACKGROUND */' : 'Background'}
              </h3>
              <p className={`text-sm leading-relaxed ${isLaunchMode ? 'text-gray-300' : 'text-muted-foreground'}`}>
                {about.background}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default About;
