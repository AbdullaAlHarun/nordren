import { FoundationPage } from "@/components/foundation-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("home", "nb");

export default function Page() {
  return <FoundationPage locale="nb" page="home" />;
}
