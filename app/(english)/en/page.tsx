import { HomePage } from "@/components/home/home-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("home", "en");

export default function Page() {
  return <HomePage locale="en" />;
}
