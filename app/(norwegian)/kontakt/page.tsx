import { ContactPage } from "@/components/contact/contact-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("contact", "nb");

export default function Page() {
  return <ContactPage locale="nb" />;
}
