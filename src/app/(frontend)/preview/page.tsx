import type { Metadata } from "next";
import PreviewApp from "@/components/PreviewApp";

export const metadata: Metadata = {
  title: "Mobile preview | Portfolio",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return <PreviewApp />;
}
