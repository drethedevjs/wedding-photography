import { GalleryImage } from "./GalleryImage";

export interface Gallery {
  id: number; // Unique identifier for the gallery
  name: string; // Name of the gallery
  heroImageTag: string;
  heroImageUrl: string; // URL of the hero image
  heroImageAlt: string; // Alt text for the hero image
  imageUrls: GalleryImage[]; // Array of images in the gallery, each with path and aspectRatio
}