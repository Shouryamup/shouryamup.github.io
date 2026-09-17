import { portfolioData } from '@/data/portfolioData';

const AboutContent = () => {
  const { about } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <h2 className="text-2xl font-semibold text-foreground">About</h2>

        <div className="space-y-10">
          <p className="max-w-[60ch] text-[17px] leading-relaxed text-muted-foreground">
            {about.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {about.values.map((value) => (
              <div key={value.title} className="flex gap-3">
                <span className="text-xl leading-none">{value.icon}</span>
                <div>
                  <h3 className="font-medium text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
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
