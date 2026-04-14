import CovLXImageData from "@/interface/ImageData";

const cloudinary = {
  async getImageData(
    folderName: string | null = null,
    tag: string | null = null
  ) {
    if (!folderName && !tag) return null;

    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/cloudinary?`;
    url = folderName ? url + `folderName=${folderName}` : url;

    if (tag) {
      url = url.includes("folderName") ? url + "&" : url + "";
      url = url + `tag=${tag}`;
    }

    const res = await fetch(url, {
      cache: "force-cache",
      method: "GET"
    });

    const data = (await res.json()) as CovLXImageData[];
    return data;
  },

  async getImageAndTagData(folderName: string | null = null) {
    try {
      // Manual query string construction
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/imageAndTag?folderName=${folderName}&includeTag=true`,
        { method: "GET" }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error getting image(s): ", errorData);
        throw new Error("Failed to fetch image and tag data");
      }

      return (await res.json()) as CovLXImageData[];
    } catch (error) {
      console.error(error);
      return []; // Return empty array to match expected type on failure
    }
  },

  async getImageDataByTag(tag: string) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cloudinary?tag=${tag}`,
        {
          method: "GET"
        }
      );

      if (!res.ok) {
        console.error(res);
        const errorData = await res.json();
        console.error("Error getting image(s): ", errorData);
        throw new Error("Failed to fetch image data by t ag");
      }

      return (await res.json()) as CovLXImageData[];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getImageSrc(fileName: string) {
    return `${process.env.CLOUDINARY_DELIVERY_URL}/${fileName}`;
  },
  getClientImageSrc(fileName: string) {
    return `${process.env.NEXT_PUBLIC_CLOUDINARY_DELIVERY_URL}/${fileName}`;
  }
};

export default cloudinary;
