import { QuotePage } from "@/components/quote/quote-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("quote", "nb");

export default function Page() {
  return <QuotePage locale="nb" />;
}
