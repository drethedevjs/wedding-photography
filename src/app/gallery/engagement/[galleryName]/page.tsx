import { redirect } from "next/navigation";
import GalleryComponent from "../../../components/Gallery/Gallery";

export default async function Gallery({
  params
}: {
  params: Promise<{ galleryName: string }>;
}) {
  const { galleryName } = await params;

  if (!galleryName) redirect("/portfolio");

  return (
    <GalleryComponent galleryName={galleryName} galleryType="engagement" />
  );
}
