import galleries from "@/data/galleries";

const otherGalleryHelper = {
  getLeftAndRightGallery(currentGalleryId: number) {
    // Filter out the current gallery and get only active galleries
    const availableGalleries = galleries.filter(
      (g) => g.id !== currentGalleryId && g.isActive
    );

    // Get random left gallery
    const leftIndex = Math.floor(Math.random() * availableGalleries.length);
    const leftGallery = availableGalleries[leftIndex];

    // Remove the left gallery from available options and get random right gallery
    const remainingGalleries = availableGalleries.filter(
      (g) => g.id !== leftGallery.id
    );
    const rightGallery =
      remainingGalleries[Math.floor(Math.random() * remainingGalleries.length)];

    return { leftGallery, rightGallery };
  }
};

export default otherGalleryHelper;
