import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div id="breadcrumbs" className="max-w-[1200px] mx-auto px-4">
      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-500 py-5">
        {/* Home link */}
        <Link href="/" className="hover:text-[#0058EE]">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>

        {items.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="mx-2">&gt;</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#0058EE]">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[#0058EE]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
