import type { Metadata } from "next";
import { Space_Grotesk, Figtree, JetBrains_Mono } from "next/font/google";
import { getContent } from "@/lib/content";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL = getSiteUrl();

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
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
