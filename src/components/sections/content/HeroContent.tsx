import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import headshot from '@/assets/headshot.jpg';

const HeroContent = () => {
  const { personal } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground"
          >
            {personal.name}
          </motion.h1>

          <p className="mt-4 text-xl font-medium text-primary">{personal.title}</p>

          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-muted-foreground">
            {personal.headline}. Based in {personal.location}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Email me
            </a>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="md:mt-3 w-40 md:w-full mx-auto md:mx-0">
          <img
            src={headshot}
            alt={personal.name}
            className="w-full aspect-[4/5] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
