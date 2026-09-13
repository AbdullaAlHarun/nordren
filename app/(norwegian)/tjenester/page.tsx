import { ServicesPage } from "@/components/services/services-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("services", "nb");

export default function Page() {
  return <ServicesPage locale="nb" />;
}
