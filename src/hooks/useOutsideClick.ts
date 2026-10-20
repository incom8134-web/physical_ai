import { useEffect, useRef } from 'react';

/**
 * Calls `callback` when a mouse or touch press starts outside the element in `ref`.
 *
 * - Listens in the capture phase, so a handler that stops propagation cannot
 *   swallow the outside press.
 * - Ignores presses on nodes that left the document during the same tick
 *   (otherwise a panel that was just opened would close again).
 * - Keeps the latest callback in a ref, so an inline arrow function does not
 *   re-register the listeners on every render.
 * - `enabled = false` skips the listeners entirely while the panel is closed.
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  callback: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      const target = event.target as Node | null;
      if (!el || !target) return;
      // Ignore presses on nodes that have already left the document.
      if (!target.isConnected) return;
      if (el.contains(target)) return;
      savedCallback.current(event);
    };

    document.addEventListener('mousedown', listener, true);
    document.addEventListener('touchstart', listener, true);

    return () => {
      document.removeEventListener('mousedown', listener, true);
      document.removeEventListener('touchstart', listener, true);
    };
  }, [ref, enabled]);
}

export default useOutsideClick;
