import { Suspense, useEffect, useState, type ReactNode } from "react";
import { ThemeProvider } from "../../context/ThemeContext";

/**
 * The Harbor Finance site is a client-rendered experience (3D globe, GSAP,
 * localStorage theme). This wrapper defers page rendering until hydration so
 * SSR never touches browser-only APIs, while route-level head() metadata is
 * still server-rendered for SEO.
 */
export function ClientPage({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="min-h-screen" aria-hidden="true" />;
  }

  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        {children}
      </Suspense>
    </ThemeProvider>
  );
}
