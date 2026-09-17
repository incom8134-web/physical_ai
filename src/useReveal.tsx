import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>(threshold = 0.16) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  as: As = 'div',
  delay = 0,
  className,
  style,
  children,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Tag = As as any;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
