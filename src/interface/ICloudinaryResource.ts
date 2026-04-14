// types/cloudinary.ts
export default interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
  bytes: number;
  resource_type: string;
  type: string;
  url: string;
  filename: string;
  status: string;
  asset_folder: string;
  display_name: string;
  tags: string[];
}
