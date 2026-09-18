import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Download } from 'lucide-react';

const ContactContent = () => {
  const { personal, achievements } = portfolioData;

  const links = [
    { label: 'Email', href: `mailto:${personal.email}` },
    { label: 'LinkedIn', href: `https://${personal.linkedin}` },
    { label: 'Phone', href: `tel:${personal.phone}` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
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

      <div className="mt-20 rounded-3xl bg-foreground text-background p-8 sm:p-12 md:p-16 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Let's build something.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-background/70 max-w-[50ch]">
            I'm open to discussing new opportunities and interesting projects. {personal.location}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:-translate-y-0.5 transition-transform"
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
                className="inline-flex items-center px-6 py-3 rounded-full border border-background/20 text-sm font-medium hover:border-background/40 hover:-translate-y-0.5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personal.name}
      </footer>
    </div>
  );
};

export default ContactContent;
