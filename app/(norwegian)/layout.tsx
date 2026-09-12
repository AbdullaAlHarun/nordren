import type { ReactNode } from "react";
import { Document } from "@/components/document";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Document locale="nb">{children}</Document>;
}
