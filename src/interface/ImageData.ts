export default interface CovLXImageData {
  metadata: Metadata;
  tags: string[] | null;
  fileName: string;
}

interface Metadata {
  url: string;
  width: string;
  height: string;
  format: string;
  isActive: boolean;
  galleryName: string;
  directory: string;
  alt: string;
}
