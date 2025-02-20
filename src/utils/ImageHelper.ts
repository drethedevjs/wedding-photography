import { _Object, ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const imageHelper = {
  async getListOfImages() {
      throw new Error("Uploadcare is not in use. Use cloudflare.");
      // const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
      //   publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY ?? "",
      //   secretKey: process.env.NEXT_PUBLIC_UPLOADCARE_SECRET_KEY ?? ""
      // });

      // return await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema })
  },
  async getImageData(prefix: string) {
    const s3 = new S3Client({
      endpoint: "https://baba31124393bf6a21259678889d1ac2.r2.cloudflarestorage.com",
      region: "auto",
      credentials: {
        accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY ?? "",
        secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY ?? "",
      },
    });

    const command = new ListObjectsV2Command({
      Bucket: "covenant-lx",
      Prefix: prefix,
    });


    try {
      const response = await s3.send(command);
      return response.Contents ?? [];
    } catch (err) {
      console.error(err);
    }
  },
  getImageSrc(imageData: _Object[], tag: string) {
    const key = imageData.length ? imageData.find(x => x.Key?.includes(tag))?.Key : "";
    return `${process.env.NEXT_PUBLIC_CDN_PREFIX}/${key}`;
  }
}

export default imageHelper;