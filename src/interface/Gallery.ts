export interface Gallery {
  id: number; // Unique identifier for the gallery
  name: string; // Name of the gallery
  heroImageTag: string;
  heroImageUrl: string; // URL of the hero image
  heroImageAlt: string; // Alt text for the hero image
  isActive: boolean;
}
