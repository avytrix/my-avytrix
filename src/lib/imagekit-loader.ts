// next/image loader: ImageKit resizes to each srcset width and serves WebP/AVIF per browser,
// so the static export still ships responsive images. SVGs ask for the original file:
// ImageKit otherwise rasterizes them to PNG.
export default function imagekitLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.endsWith(".svg")) return `${src}?tr=orig-true`;
  return `${src}${src.includes("?") ? "&" : "?"}tr=w-${width},q-${quality ?? 80}`;
}
