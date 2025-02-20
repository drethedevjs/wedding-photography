import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3 = new S3Client({
  endpoint: "https://baba31124393bf6a21259678889d1ac2.r2.cloudflarestorage.com",
  region: "auto",
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY!,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY!,
  },
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const prefix = searchParams.get("prefix") || "";

  const command = new ListObjectsV2Command({
    Bucket: "covenant-lx",
    Prefix: prefix,
  });

  try {
    const response = await s3.send(command);
    return NextResponse.json(response.Contents ?? []);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}
