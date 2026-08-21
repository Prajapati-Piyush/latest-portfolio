import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger siblings, matching the Reveal delay scale. */
  delay?: number;
  className?: string;
};

/**
 * The above-the-fold twin of <Reveal>.
 *
 * <Reveal> is a client component whose initial state is `opacity: 0` — fine for
 * sections below the fold, but for the hero it means the LCP element is painted
 * invisible and only appears once framer-motion hydrates, which pushes Largest
 * Contentful Paint out by however long the JS takes.
 *
 * This renders on the server with no JS at all and fades in via CSS at first
 * paint, so the animation looks the same while the text is in the HTML and
 * countable as LCP immediately. `animation-fill-mode: both` plus the global
 * reduced-motion rule means it always settles fully visible.
 */
export function RevealOnLoad({ children, delay = 0, className }: Props) {
  return (
    <div
      className={className ? `reveal-in ${className}` : "reveal-in"}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
