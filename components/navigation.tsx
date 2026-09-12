import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/locales";
import { routes, type PageId } from "@/lib/i18n/routes";

const primaryPages = ["services", "pricing", "about", "contact"] as const satisfies readonly PageId[];
const footerPages = ["home", ...primaryPages, "quote"] as const satisfies readonly PageId[];

export function Navigation({
  locale,
  page,
  placement = "header",
}: {
  locale: Locale;
  page: PageId;
  placement?: "header" | "footer";
}) {
  const content = getDictionary(locale).shell;
  const pages = placement === "footer" ? footerPages : primaryPages;

  return (
    <nav aria-label={placement === "footer" ? content.footerNavigation : content.primaryNavigation}>
      <ul className="navigation-list">
        {pages.map((destination) => (
          <li key={destination}>
            <a
              href={routes[destination][locale]}
              className="navigation-link"
              aria-current={destination === page ? "page" : undefined}
            >
              {content.navigation[destination]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
