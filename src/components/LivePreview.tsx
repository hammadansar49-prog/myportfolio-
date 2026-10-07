"use client";

import { useRouter } from "next/navigation";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";
import { getSiteUrl } from "@/lib/siteUrl";

/** Refreshes the page when you save inside the CMS live preview. Renders nothing visible. */
export default function LivePreview() {
  const router = useRouter();
  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={getSiteUrl()}
    />
  );
}
