import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Download } from 'lucide-react';

const ContactContent = () => {
  const { personal, achievements } = portfolioData;

  const links = [
    { label: 'Email', href: `mailto:${personal.email}`, display: personal.email },
    { label: 'LinkedIn', href: `https://${personal.linkedin}`, display: personal.linkedin },
    { label: 'Phone', href: `tel:${personal.phone}`, display: personal.phone },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <h2 className="text-2xl font-semibold text-foreground">Certifications</h2>

        <ul className="space-y-4">
          {achievements.map((achievement) => (
            <li key={achievement.title} className="border-b border-border pb-4 last:border-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-foreground">{achievement.title}</span>
                {achievement.verifyUrl && (
                  <a
                    href={achievement.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    Verify <ExternalLink size={10} />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
              {achievement.description && (
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 grid md:grid-cols-[200px_1fr] gap-10">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>

        <div>
          <p className="max-w-[50ch] text-[17px] leading-relaxed text-muted-foreground">
            I'm open to discussing new opportunities and interesting projects.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download résumé
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{personal.location}</p>
        </div>
      </div>

      <footer className="mt-20 pt-6 border-t border-border text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personal.name}
      </footer>
    </div>
  );
};

export default ContactContent;
