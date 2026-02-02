import { motion } from 'framer-motion';
import { useDesignMode } from '@/contexts/DesignModeContext';
import { portfolioData } from '@/data/portfolioData';


const Inspirations = () => {
  const { isLaunchMode, isBlueprintMode } = useDesignMode();
  const { inspirations } = portfolioData;

  return (
    <div className="relative py-16 mt-12" id="inspirations">
      <span className="section-label top-4 left-4">&lt;div id="inspirations"&gt;</span>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
            {isBlueprintMode ? '// INSPIRATIONS' : 'What Inspires Me'}
          </h2>
          <p className={`mt-4 max-w-2xl ${isLaunchMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
            {isBlueprintMode 
              ? '/* Technologies, philosophies, and creators that shape my approach */' 
              : 'Technologies, philosophies, and creators that shape my approach to building software.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirations.map((item, index) => (
            <motion.div
              key={index}
              className={`blueprint-container p-6 group ${isLaunchMode ? 'glass-card glow-hover' : ''}`}
              style={{ borderRadius: isLaunchMode ? '12px' : '0' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <span className="section-label -top-2 left-2">&lt;article&gt;</span>
              
              {/* Category Tag */}
              <span className={`text-xs font-mono px-2 py-1 inline-block mb-4 ${
                isLaunchMode 
                  ? 'bg-primary/20 text-primary rounded' 
                  : 'border border-dashed border-foreground/50'
              }`}>
                {isBlueprintMode ? `[${item.category.toUpperCase()}]` : item.category}
              </span>

              {/* Icon/Visual */}
              <div className={`text-4xl mb-4 transition-transform duration-400 ease-in-out group-hover:scale-110 ${
                isLaunchMode ? 'filter drop-shadow-[0_0_8px_hsl(180,100%,50%,0.5)]' : ''
              }`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold mb-2 ${isLaunchMode ? 'text-white' : 'text-foreground'}`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-4 ${isLaunchMode ? 'text-gray-400' : 'text-muted-foreground'}`}>
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
      
      <span className="section-label bottom-4 right-4">&lt;/div&gt;</span>
    </div>
  );
};

export default Inspirations;
