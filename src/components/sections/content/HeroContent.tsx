import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import headshot from '@/assets/headshot.jpg';

const HeroContent = () => {
  const { personal } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-semibold tracking-tight leading-[0.95] text-foreground text-[clamp(2.75rem,7vw,5.5rem)]"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-xl sm:text-2xl font-medium text-primary"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-[48ch] text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            {personal.headline}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_20px_-8px_rgba(0,0,0,0.25)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_28px_-8px_rgba(0,0,0,0.32)] hover:-translate-y-0.5 transition-all"
            >
              Email me
            </a>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-foreground/30 hover:-translate-y-0.5 transition-all"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-48 sm:w-64 md:w-full mx-auto md:mx-0"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10" />
          <img
            src={headshot}
            alt={personal.name}
            className="w-full aspect-[4/5] object-cover rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
          />
          <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 flex items-center gap-2 bg-card border border-border rounded-full pl-2 pr-4 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs font-medium text-foreground whitespace-nowrap">Open to relocate</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
