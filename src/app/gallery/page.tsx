import GalleryComponent from "../components/Gallery/Gallery";

export default async function Gallery({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const galleryId = Number((await searchParams).id);
  return <GalleryComponent galleryId={galleryId} />;
}
