import { useEffect, useRef } from 'react';

/**
 * Calls `callback` when a pointer press starts outside `ref`.
 *
 * Six changes from the original snippet, all of them things that break in
 * React 19 or in real usage:
 *
 *  1. `RefObject<T | null>` — `useRef<HTMLDivElement>(null)` produces
 *     `RefObject<HTMLDivElement | null>` in React 19 types, so the original
 *     `RefObject<HTMLDivElement>` signature does not accept it.
 *  2. Generic over the element type instead of hard-coding `HTMLDivElement`.
 *  3. `(event: MouseEvent | TouchEvent) => void` instead of `Function`, which
 *     type-checks nothing.
 *  4. The callback is held in a ref, so passing an inline arrow function does
 *     not tear down and re-register the global listeners on every render.
 *  5. Capture phase, so a handler that calls `stopPropagation()` (or unmounts
 *     its own subtree) cannot swallow the outside press.
 *  6. `target.isConnected` guard — a click on a node that was removed during
 *     the same tick is not "outside", it is gone, and treating it as outside
 *     closes panels that were just opened.
 *
 * `enabled` lets a closed panel skip listener registration entirely.
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
