import CoupleFormActionResult from "@/interface/CoupleFormActionResult";

export default class FormDataResult implements CoupleFormActionResult {
  constructor(
    public isSuccess: boolean,
    public message: string,
    public fieldErrors: Record<string, string>,
  ){}
}