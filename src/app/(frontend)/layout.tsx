import type { Metadata } from "next";
// Fonts are bundled from npm (no download from Google during the build).
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/figtree";
import "@fontsource-variable/jetbrains-mono";
import { getContent } from "@/lib/content";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const SITE_URL = getSiteUrl();

// Content comes from the CMS database, which must not be opened while the site is being built.
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getContent();
  return {
    metadataBase: new URL(SITE_URL),
    title: site.seoTitle,
    description: site.seoDescription,
    openGraph: {
      title: site.seoTitle,
      description: site.subline,
      type: "website",
      siteName: site.brandName,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seoTitle,
      description: site.subline,
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
