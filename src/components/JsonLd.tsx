import { pageGraph } from "@/lib/seo";

// The page's single ld+json block (one @graph per page)
export default function JsonLd(props: Parameters<typeof pageGraph>[0]) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraph(props)).replace(/</g, "\\u003c") }}
    />
  );
}
