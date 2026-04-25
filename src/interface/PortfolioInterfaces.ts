import CovLXImageData from "./ImageData";

export type PortfolioCategory = "weddings" | "engagements";
export type PortfolioTag = "wedding-portfolio" | "engagement-portfolio";

export interface PortfolioProps {
  category: PortfolioCategory;
  tag: PortfolioTag;
}

export interface PortfolioHeroProps {
  category: PortfolioCategory;
  imageFileName?: string;
  alt?: string;
}

export interface PortfolioGridProps {
  category: PortfolioCategory;
  covers: CovLXImageData[];
}

export interface PortfolioCardProps {
  category: PortfolioCategory;
  cover: CovLXImageData;
}

export interface PortfolioCTAProps {
  headline?: string;
  buttonLabel?: string;
}

export interface GalleryDetailProps {
  category: PortfolioCategory;
  galleryName: string;
}

export interface GalleryDetailHeroProps {
  imageFileName?: string;
  alt?: string;
  coupleNames: string;
  date?: string;
}
