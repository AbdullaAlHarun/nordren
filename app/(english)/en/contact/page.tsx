import { ContactPage } from "@/components/contact/contact-page";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("contact", "en");

export default function Page() {
  return <ContactPage locale="en" />;
}
