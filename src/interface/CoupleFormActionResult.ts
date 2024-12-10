export default interface CoupleFormActionResult {
  isSuccess: boolean;
  message?: string;
  fieldErrors: Record<string, string>;
}