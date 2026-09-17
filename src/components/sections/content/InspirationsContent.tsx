import { portfolioData } from '@/data/portfolioData';

const InspirationsContent = () => {
  const { inspirations } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <h2 className="text-2xl font-semibold text-foreground">Inspirations</h2>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {inspirations.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="text-xl leading-none">{item.icon}</span>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationsContent;
