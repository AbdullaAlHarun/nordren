import { AboutPage } from "@/components/about/about-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("about", "en");

export default function Page() {
  return <AboutPage locale="en" />;
}
