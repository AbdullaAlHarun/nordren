import type { ReactNode } from "react";

export function MobileNavigation({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="mobile-navigation">
      {/* Native disclosure supplies keyboard operation and expanded state without hydration. */}
      <summary className="mobile-navigation-toggle">{label}</summary>
      <div className="mobile-navigation-panel">{children}</div>
    </details>
  );
}
