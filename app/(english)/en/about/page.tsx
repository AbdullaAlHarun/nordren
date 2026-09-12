import { FoundationPage } from "@/components/foundation-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("about", "en");

export default function Page() {
  return <FoundationPage locale="en" page="about" />;
}
