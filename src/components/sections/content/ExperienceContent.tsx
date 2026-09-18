import { portfolioData } from '@/data/portfolioData';
import { highlightKeywords } from '@/lib/highlight-keywords';

const KEYWORDS = [
  'React', 'Node.js', 'Next.js', 'AWS', 'Lambda', 'DynamoDB', 'OpenSearch',
  'MySQL', 'Java', 'Spring Boot', 'Storybook', 'CloudFormation', 'CDK', 'CRON',
];

const ExperienceContent = () => {
  const { experience } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <h2 className="text-2xl font-semibold text-foreground">Experience</h2>

        <ol className="relative space-y-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
          {experience.map((job) => (
            <li key={job.id} className="relative pl-10">
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.title} <span className="font-normal text-muted-foreground">· {job.company}</span>
                </h3>
                <span className="text-tabular text-sm text-muted-foreground shrink-0">{job.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{job.location}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-primary/50">
                    {highlightKeywords(highlight, KEYWORDS)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExperienceContent;
