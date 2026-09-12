import { FoundationPage } from "@/components/foundation-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("contact", "nb");

export default function Page() {
  return <FoundationPage locale="nb" page="contact" />;
}
