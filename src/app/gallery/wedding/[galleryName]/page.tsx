import GalleryDetail from "@/app/components/Gallery/GalleryDetail";
import { redirect } from "next/navigation";

export default async function WeddingGalleryPage({
  params
}: {
  params: Promise<{ galleryName: string }>;
}) {
  const { galleryName } = await params;

  if (!galleryName) redirect("/portfolio/wedding");

  return <GalleryDetail category="weddings" galleryName={galleryName} />;
}
