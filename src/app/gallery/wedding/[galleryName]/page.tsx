import GalleryComponent from "@/app/components/Gallery/Gallery";
import { redirect } from "next/navigation";

export default async function Gallery({
  params
}: {
  params: Promise<{ galleryName: string }>;
}) {
  const { galleryName } = await params;

  if (!galleryName) redirect("/portfolio");

  return <GalleryComponent galleryName={galleryName} galleryType="wedding" />;
}
