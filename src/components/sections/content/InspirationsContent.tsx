import { portfolioData } from '@/data/portfolioData';

const InspirationsContent = () => {
  const { inspirations } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-20">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <h2 className="text-2xl font-semibold text-foreground">Inspirations</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {inspirations.map((item) => (
            <div
              key={item.title}
              className="group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationsContent;
