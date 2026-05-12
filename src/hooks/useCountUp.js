import { useEffect, useRef, useState } from "react";

/**
 * Returns a string that animates from 0 → `value` (numeric portion only)
 * once `start` becomes true. Preserves any non-numeric prefix/suffix in `template`.
 *
 * Usage: const display = useCountUp({ value: 1200, start: inView, template: "+1.200" })
 */
export default function useCountUp({
  value,
  start = true,
  duration = 1500,
  template,
  format = (n) => n.toLocaleString("pt-BR"),
}) {
  const [n, setN] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(value * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, start, duration]);

  if (template) {
    // Replace the numeric segment inside the template with the animated value.
    return template.replace(/\d[\d.,]*/, format(n));
  }
  return format(n);
}
