import { PricingPage } from "@/components/pricing/pricing-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("pricing", "nb");

export default function Page() {
  return <PricingPage locale="nb" />;
}
