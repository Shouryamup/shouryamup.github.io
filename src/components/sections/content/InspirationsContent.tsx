import { portfolioData } from '@/data/portfolioData';
import IconCard from '@/components/IconCard';

const InspirationsContent = () => {
  const { inspirations } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <h2 className="text-2xl font-semibold text-foreground">Inspirations</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {inspirations.map((item) => (
            <IconCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationsContent;
