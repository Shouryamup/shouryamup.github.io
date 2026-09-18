import { useSpotlight } from '@/hooks/use-spotlight';

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
}

const IconCard = ({ icon, title, description }: IconCardProps) => {
  const spotlight = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      className="spotlight-card group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
