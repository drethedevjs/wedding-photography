// "use client"
import { Suspense } from 'react';
import GalleryComponent from '../components/Gallery/Gallery';

export default async function Gallery({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const galleryId = Number((await searchParams).id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryComponent galleryId={galleryId} />
    </Suspense>
  );
}
