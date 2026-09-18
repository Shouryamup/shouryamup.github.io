import { portfolioData } from '@/data/portfolioData';
import IconCard from '@/components/IconCard';

const AboutContent = () => {
  const { about } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <h2 className="text-2xl font-semibold text-foreground">About</h2>

        <div className="space-y-12">
          <p className="max-w-[62ch] text-lg sm:text-xl leading-relaxed text-foreground/90">
            {about.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {about.values.map((value) => (
              <IconCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
