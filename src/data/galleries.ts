import { Gallery } from "@/interface/Gallery";

const cdnDomain = process.env.NEXT_PUBLIC_CDN_PREFIX;

const galleries: Gallery[] = [
  {
    id: 1,
    name: "Pritchard Wedding",
    heroImageTag: "pritchard",
    heroImageUrl: "/images/gallery/Wedding-Photography-Pritchard-FeatImg.jpg",
    heroImageAlt: "Bride and groom in a close embrace, bride adjusting groom's bow tie.",
    imageUrls: [
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-1.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-2.jpg`, aspectRatio: "16/9" }, // Horizontal
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-3.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-4.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-5.jpg`, aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 2,
    name: "Martin Wedding",
    heroImageTag: "martin",
    heroImageUrl: "/images/home/augusta-ga-wedding-photographer-2.jpg",
    heroImageAlt: "Bride and bridesmaids locking arms and looking at one another..",
    imageUrls: [
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-1.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-2.jpg`, aspectRatio: "16/9" }, // Horizontal
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-3.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-4.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-5.jpg`, aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 3,
    name: "Muff Wedding",
    heroImageTag: "muff",
    heroImageUrl: "/images/gallery/Wedding-Photography-Muff-FeatImg.jpg",
    heroImageAlt: "Bridal party posing like they're on a hip hop album cover.",
    imageUrls: [
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-1.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-2.jpg`, aspectRatio: "16/9" }, // Horizontal
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-3.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-4.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-5.jpg`, aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 4,
    name: "Shaffer Engagement",
    heroImageTag: "shaffer",
    heroImageUrl: "/images/gallery/Wedding-Photography-Shaffer-FeatImg.jpg",
    heroImageAlt: "An engaged couple standing at the corner of a barn looking separate ways.",
    imageUrls: [
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-1.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-2.jpg`, aspectRatio: "16/9" }, // Horizontal
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-3.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-4.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-5.jpg`, aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 5,
    name: "Anderson Wedding",
    heroImageTag: "anderson",
    heroImageUrl: "/images/gallery/Wedding-photography-anderson-FeatImg.jpg",
    heroImageAlt: "Bride and groom standing in classic prom pose, bride laughing.",
    imageUrls: [
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-1.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-2.jpg`, aspectRatio: "16/9" }, // Horizontal
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-3.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-4.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-5.jpg`, aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 6,
    name: "Jewell Engagement",
    heroImageTag: "jewell",
    heroImageUrl: "/images/gallery/Wedding-photographer-Jewell-FeatImg.jpg",
    heroImageAlt: "Bride and groom in a close embrace, bride adjusting groom's bow tie.",
    imageUrls: [
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-1.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-2.jpg`, aspectRatio: "16/9" }, // Horizontal
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-3.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-4.jpg`, aspectRatio: "9/16" }, // Vertical
      { path: `${cdnDomain}/augusta-ga-wedding-photographer-5.jpg`, aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 7,
    name: "Hacker Wedding",
    heroImageTag: "hacker",
    heroImageUrl: "/images/gallery/hacker/Wedding-Photography-Hacker-435.jpg",
    heroImageAlt: "Bride and groom in a close embrace, bride adjusting groom's bow tie.",
    imageUrls: [
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-251.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-262.jpg", aspectRatio: "16/9" }, // Horizontal
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-316.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-364.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-397.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-441.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-456.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hacker/Wedding-Photography-Hacker-435.jpg", aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 8,
    name: "Matarelli Wedding",
    heroImageTag: "matarelli",
    heroImageUrl: "/images/gallery/matarelli/Wedding-Photography-Matarelli-340.jpg",
    heroImageAlt: "Bride and bridesmaids locking arms and looking at one another.",
    imageUrls: [
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-226.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-329.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-340.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-234.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-363.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-526.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-242.jpg", aspectRatio: "16/9" }, // Horizontal
      { path: "/images/gallery/matarelli/Wedding-Photography-Matarelli-369.jpg", aspectRatio: "9/16" }, // Vertical
    ]
  },
  {
    id: 9,
    name: "Hargraves Wedding",
    heroImageTag: "hargraves",
    heroImageUrl: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-23.jpg",
    heroImageAlt: "Bride and bridesmaids locking arms and looking at one another.",
    imageUrls: [
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-1.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-2.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-3.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-4.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-5.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-6.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-7.jpg", aspectRatio: "16/9" }, // Horizontal
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-8.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-9.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-10.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-11.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-12.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-13.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-14.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-15.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-16.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-19.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-20.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-21.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-22.jpg", aspectRatio: "9/16" }, // Vertical
      { path: "/images/gallery/hargraves/Wedding-Photographer-Hargraves-23.jpg", aspectRatio: "9/16" }, // Vertical
    ]
  },
];

export default galleries;
