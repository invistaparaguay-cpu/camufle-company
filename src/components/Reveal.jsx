import useInView from "../hooks/useInView.js";

/**
 * <Reveal /> applies an entrance animation when scrolled into view.
 *
 * Variants: "up" | "left" | "right" | "scale" | "stagger"
 *
 * Delay is applied via inline transition-delay on the element itself,
 * so it composes with the base .reveal* classes from index.css.
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  threshold,
  rootMargin,
  ...rest
}) {
  const [ref, inView] = useInView({ threshold, rootMargin });
  const base =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
      ? "reveal-right"
      : variant === "scale"
      ? "reveal-scale"
      : variant === "stagger"
      ? "stagger"
      : "reveal";

  const style =
    delay && variant !== "stagger"
      ? { transitionDelay: `${delay}ms` }
      : undefined;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`${base} ${inView ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
