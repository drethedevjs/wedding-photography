import CovLXImageData from "@/interface/ImageData";

const otherGalleryHelper = {
  getLeftAndRightGallery(
    portfolio: CovLXImageData[],
    currentGalleryName: string
  ) {
    // 1. Get unique gallery names from the image data
    // We filter out the current gallery and ensure the metadata says it's active
    const uniqueGalleries: CovLXImageData[] = Array.from(
      new Set(
        portfolio.filter(
          img =>
            img.metadata.isActive &&
            img.metadata.galleryName !== currentGalleryName
        )
      )
    );

    if (uniqueGalleries.length < 2) {
      // Fallback if there aren't enough galleries to show two different ones
      return {
        left: uniqueGalleries[0],
        right: null
      };
    }

    // 2. Shuffle or pick two unique indices
    const shuffled = uniqueGalleries.sort(() => 0.5 - Math.random());

    const leftGalleryName = shuffled[0];
    const rightGalleryName = shuffled[1];

    // 3. Find one representative image for each gallery to use as the thumbnail
    const leftGalleryImage = portfolio.find(
      img => img.metadata.galleryName === leftGalleryName.metadata.galleryName
    );
    const rightGalleryImage = portfolio.find(
      img => img.metadata.galleryName === rightGalleryName.metadata.galleryName
    );

    return {
      left: leftGalleryImage,
      right: rightGalleryImage
    };
  }
};

export default otherGalleryHelper;
