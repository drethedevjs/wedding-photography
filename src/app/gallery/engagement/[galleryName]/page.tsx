import GalleryDetail from "@/app/components/Gallery/GalleryDetail";
import { redirect } from "next/navigation";

export default async function EngagementGalleryPage({
  params
}: {
  params: Promise<{ galleryName: string }>;
}) {
  const { galleryName } = await params;

  if (!galleryName) redirect("/portfolio/engagement");

  return <GalleryDetail category="engagements" galleryName={galleryName} />;
}
