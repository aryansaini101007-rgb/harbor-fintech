import logoUrl from "../assets/harbor-logo-official-clean.png";

interface HarborLogoProps {
  className?: string;
  showTagline?: boolean;
  onDark?: boolean;
}

/**
 * Brand mark — transparent-background PNG rendered directly on any surface.
 * On dark backgrounds we invert the mark so it stays legible.
 */
export function HarborMark({
  className = "h-10 w-10",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <img
      src={logoUrl}
      alt="Harbor Finance"
      className={`object-contain ${className} ${onDark ? "brightness-0 invert" : ""}`}
      loading="eager"
    />
  );
}

/**
 * Full lockup — logo + wordmark, transparent background.
 */
export function HarborLogo({
  className = "",
  showTagline = true,
  onDark = false,
}: HarborLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Harbor Finance — Fund Your Future"
        className={`h-12 w-auto sm:h-14 ${onDark ? "brightness-0 invert" : ""}`}
        loading="eager"
      />
      {showTagline && (
        <span className="sr-only">Harbor Finance — Fund Your Future</span>
      )}
    </span>
  );
}
