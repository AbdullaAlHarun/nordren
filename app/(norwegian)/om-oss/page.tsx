import { AboutPage } from "@/components/about/about-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("about", "nb");

export default function Page() {
  return <AboutPage locale="nb" />;
}
