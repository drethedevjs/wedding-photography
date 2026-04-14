import type CloudinaryResource from "./ICloudinaryResource";

export default interface CloudinarySearchResult {
  total_count: number;
  time: number;
  resources: CloudinaryResource[];
}
