import type CloudinaryResource from "./ICloudinaryResource";

export default interface CloudinaryWithTagResult {
  total_count: number;
  time: number;
  resources: CloudinaryResource[];
}
