import { PricingPage } from "@/components/pricing/pricing-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("pricing", "en");

export default function Page() {
  return <PricingPage locale="en" />;
}
