import { Fragment } from 'react';

export const highlightKeywords = (text: string, keywords: string[]) => {
  const escaped = keywords.map((kw) => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  const lowerKeywords = new Set(keywords.map((kw) => kw.toLowerCase()));

  return parts.map((part, index) => {
    if (lowerKeywords.has(part.toLowerCase())) {
      return (
        <span key={index} className="rounded px-1 -mx-0.5 bg-primary/10 text-foreground font-medium">
          {part}
        </span>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
};
