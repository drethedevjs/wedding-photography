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

    try {
      const res = await fetch(url, {
        next: { revalidate: 3600 },
        method: "GET"
      });

      if (!res.ok) {
        console.error("Error fetching cloudinary image data:", res.status);
        return [] as CovLXImageData[];
      }

      const data = (await res.json()) as CovLXImageData[];
      // Defensive: API can return { error, statusCode } on failure
      if (!Array.isArray(data)) return [] as CovLXImageData[];
      return data;
    } catch (error: unknown) {
      // AbortError during fast-refresh / revalidation is expected noise — swallow it
      const name =
        error instanceof Error ? error.name : String(error);
      if (name !== "AbortError") {
        console.error("Error fetching cloudinary image data:", error);
      }
      return [] as CovLXImageData[];
    }
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
        throw new Error("Failed to fetch image data by tag");
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
