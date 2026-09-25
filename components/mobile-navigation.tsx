import type { ReactNode } from "react";

export function MobileNavigation({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="mobile-navigation">
      {/* Native disclosure supplies keyboard operation and expanded state without hydration. */}
      <summary className="mobile-navigation-toggle" aria-label={label}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" focusable="false">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="mobile-navigation-panel">{children}</div>
    </details>
  );
}
