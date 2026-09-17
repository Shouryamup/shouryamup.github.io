import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';


const About = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { personal, about } = portfolioData;

  return (
    <section className="relative px-6 py-16" id="about">
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

        <div className="grid md:grid-cols-1 gap-8">

          {/* Bio Content */}
          <motion.div
            className="space-y-6"
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

          </motion.div>
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/section&gt;</span>
    </section>
  );
};

export default About;
