import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView]. Sets inView=true the first time the element
 * intersects the viewport, then disconnects (one-shot reveal).
 *
 * options:
 *   threshold (default 0.18)
 *   rootMargin (default "0px 0px -8% 0px")
 *   once (default true)
 */
export default function useInView({
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
