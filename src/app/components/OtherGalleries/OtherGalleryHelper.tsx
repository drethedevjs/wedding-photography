import galleries from '@/data/galleries';

const otherGalleryHelper = {
    getLeftAndRightGallery(currentGalleryId: number) {
      const getRandomNumber = () => {
        let randomNumber = 0;
        do {
          randomNumber = Math.floor(Math.random() * (10 - 1) + 1); // generate random number between 1 and 10
        } while (randomNumber === currentGalleryId) // ensure that the current gallery doesn't show up in the "Other Galleries" section

        return randomNumber;
      };

      const leftRandom = getRandomNumber();
      const leftGallery = galleries.find(g => g.id == leftRandom);

      let rightRandom = 0;
      do { rightRandom = getRandomNumber()}
      while (rightRandom === leftRandom || rightRandom === currentGalleryId); // ensure that the current gallery doesn't show up in the "Other Galleries" section

      const rightGallery = galleries.find(g => g.id == rightRandom);

      return { leftGallery, rightGallery };
    }
}

export default otherGalleryHelper;