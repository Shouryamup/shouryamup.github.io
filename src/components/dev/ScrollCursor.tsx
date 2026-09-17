import { useEffect, useState } from 'react';

// A thin progress rail styled as a terminal cursor tracing down the page —
// the one deliberate scroll-linked motion moment on the live site.
const ScrollCursor = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(1, scrollTop / max) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 bottom-0 w-[3px] z-40 hidden md:block bg-border/60"
      aria-hidden="true"
    >
      <div
        className="w-full bg-primary transition-[height] duration-150 ease-out relative"
        style={{ height: `${progress * 100}%` }}
      >
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollCursor;
