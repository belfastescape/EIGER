import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Filenames under /public/images that are served as-is (no rewrite). */
const EXISTING_IMAGE_NAMES = new Set([
  "eiger-hero.png",
  "bunker.png",
  "chamber.png",
  "mountain.png",
  "reception.png",
]);

/** Pool used when a requested /images/* file is not in EXISTING_IMAGE_NAMES. */
const FALLBACK_IMAGES = [
  "eiger-hero.png",
  "bunker.png",
  "chamber.png",
  "mountain.png",
  "reception.png",
];

function hashPath(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/images/")) {
    return NextResponse.next();
  }

  const requestedFileName = decodeURIComponent(pathname.split("/").pop() ?? "");

  if (EXISTING_IMAGE_NAMES.has(requestedFileName)) {
    return NextResponse.next();
  }

  const fallbackIndex = hashPath(pathname) % FALLBACK_IMAGES.length;
  const fallbackImage = FALLBACK_IMAGES[fallbackIndex];
  const rewrittenUrl = request.nextUrl.clone();
  rewrittenUrl.pathname = `/images/${fallbackImage}`;

  return NextResponse.rewrite(rewrittenUrl);
}

export const config = {
  matcher: ["/images/:path*"],
};
