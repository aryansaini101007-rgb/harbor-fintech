import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "../../context/ThemeContext";

/**
 * ClientPage provides ThemeProvider and Suspense boundaries for application routes.
 * Semantic HTML is fully server-rendered for SEO, crawlability, and instant FCP/LCP,
 * while interactive client-only elements (such as 3D WebGL canvases) hydrate smoothly on mount.
 */
export function ClientPage({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        {children}
      </Suspense>
    </ThemeProvider>
  );
}
