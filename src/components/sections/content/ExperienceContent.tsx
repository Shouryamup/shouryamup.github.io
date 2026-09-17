import { portfolioData } from '@/data/portfolioData';
import { highlightKeywords } from '@/lib/highlight-keywords';

const KEYWORDS = [
  'React', 'Node.js', 'Next.js', 'AWS', 'Lambda', 'DynamoDB', 'OpenSearch',
  'MySQL', 'Java', 'Spring Boot', 'Storybook', 'CloudFormation', 'CDK', 'CRON',
];

const ExperienceContent = () => {
  const { experience } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <h2 className="text-2xl font-semibold text-foreground">Experience</h2>

        <ol className="relative border-l border-border space-y-10 pl-8">
          {experience.map((job) => (
            <li key={job.id} className="relative">
              <span className="absolute -left-[calc(2rem+4px)] top-1.5 w-2 h-2 rounded-full bg-primary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-medium text-foreground">
                  {job.title} <span className="text-muted-foreground">· {job.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground shrink-0">{job.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{job.location}</p>
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted-foreground pl-4 relative before:content-['–'] before:absolute before:left-0">
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
