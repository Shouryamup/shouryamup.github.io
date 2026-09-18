import { useRef } from 'react';

// Tracks cursor position within an element as CSS custom properties,
// so a card can render a soft light that follows the pointer.
export const useSpotlight = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return { ref, onMouseMove };
};
