import Link from "next/link";
import { CodeXml, Server, House, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const GROUP_ICONS: Record<string, { icon: React.ReactNode; label: string }> = {
  "Web & Software Development": {
    icon: <CodeXml className="w-4 h-4" aria-hidden="true" />,
    label: "Web & Software Development",
  },
  "Infrastructure & Teams": {
    icon: <Server className="w-4 h-4" aria-hidden="true" />,
    label: "Infrastructure & Teams",
  },
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div id="breadcrumbs" className="max-w-[1200px] mx-auto px-4">
      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-500 py-5">
        {/* Home */}
        <Link prefetch={false} href="/" className="hover:text-[#0058EE] flex items-center">
          <House className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const groupMeta = GROUP_ICONS[item.label];

          return (
            <span key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 flex-shrink-0" aria-hidden="true" />

              {isLast ? (
                // Current page: always show full text, truncate if very long
                <span
                  className="font-medium text-[#0058EE] truncate max-w-[140px] sm:max-w-[220px] md:max-w-none"
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : groupMeta ? (
                // Parent group: icon on mobile/tablet, icon + text on desktop
                item.href ? (
                  <Link prefetch={false}
                    href={item.href}
                    className="hover:text-[#0058EE] flex items-center gap-1"
                    title={groupMeta.label}
                  >
                    {/* Icon always visible */}
                    <span className="flex-shrink-0">{groupMeta.icon}</span>
                    {/* Text visible on lg+, screen-reader only below */}
                    <span className="sr-only lg:not-sr-only">{groupMeta.label}</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1" title={groupMeta.label}>
                    <span className="flex-shrink-0">{groupMeta.icon}</span>
                    <span className="sr-only lg:not-sr-only">{groupMeta.label}</span>
                  </span>
                )
              ) : (
                // Fallback for non-group parents
                item.href ? (
                  <Link prefetch={false}
                    href={item.href}
                    className="hover:text-[#0058EE] truncate max-w-[120px] md:max-w-none"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="truncate max-w-[120px] md:max-w-none" title={item.label}>
                    {item.label}
                  </span>
                )
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
