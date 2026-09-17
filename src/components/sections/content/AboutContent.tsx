import { portfolioData } from '@/data/portfolioData';

const AboutContent = () => {
  const { about } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-20">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <h2 className="text-2xl font-semibold text-foreground">About</h2>

        <div className="space-y-12">
          <p className="max-w-[62ch] text-lg sm:text-xl leading-relaxed text-foreground/90">
            {about.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {about.values.map((value) => (
              <div
                key={value.title}
                className="group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
