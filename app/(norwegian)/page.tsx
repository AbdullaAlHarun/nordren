import { HomePage } from "@/components/home/home-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("home", "nb");

export default function Page() {
  return <HomePage locale="nb" />;
}
