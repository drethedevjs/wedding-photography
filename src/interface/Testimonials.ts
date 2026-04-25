export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  imageFileName?: string;
  imageAlt?: string;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}
