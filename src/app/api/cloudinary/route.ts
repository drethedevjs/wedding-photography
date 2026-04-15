// server/api/cloudinary.get.ts
import CloudinarySearchResult from "@/interface/ICloudinarySearchResult";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const folderName = searchParams.get("folderName") || "";
  const tag = searchParams.get("tag");

  try {
    let result: CloudinarySearchResult;

    if (tag != null) {
      result = await cloudinary.search
        .expression(tag)
        .fields(["tags", "context"])
        .max_results(30)
        .execute();
    } else {
      result = await cloudinary.search
        .expression(`asset_folder:${folderName}/*`)
        .fields(["tags", "context"])
        .sort_by("filename", "asc")
        .max_results(30)
        .execute();
    }

    const resources = result.resources.map(resource => ({
      metadata: {
        url: resource.secure_url,
        width: resource.width,
        height: resource.height,
        format: resource.format,
        isActive: resource.status === "active",
        galleryName: resource.asset_folder.split("/").pop(),
        directory: resource.asset_folder,
        atl: resource.context?.hasOwnProperty("alt")
          ? resource.context.alt
          : "Augusta, GA Wedding Photographer"
      },
      fileName:
        resource.display_name ?? resource.filename ?? resource.public_id,
      tags: resource.tags
    }));

    return NextResponse.json(resources);
  } catch (oops: any) {
    console.error(oops);
    return NextResponse.json({
      error: `Failed to fetch images: ${oops}`,
      statusCode: oops.error?.http_code ?? 500
    });
  }
}
