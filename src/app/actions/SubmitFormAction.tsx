"use server";

import FormDataResult from "@/classes/FormDataResult";
import CoupleFormActionResult from "@/interface/CoupleFormActionResult";
import { object, string, ValidationError } from "yup";

export default async function submitFormAction(formData: FormData) : Promise<CoupleFormActionResult> {
  const schema = object({
    brideName: string().required("Bride Name is required"),
    groomName: string().required("Groom Name is required"),
    email: string().email("Invalid email").required("Email is required"),
    weddingDate: string().required("Wedding Date is required"),
    phone: string().required("Phone is required"),
    venue: string().required("Venue is required"),
    message: string().min(15, "Message isn't long enough").required("Message is required"),
  });

  const plainObject = {
    brideName: formData.get("brideName"),
    groomName: formData.get("groomName"),
    email: formData.get("email"),
    weddingDate: formData.get("weddingDate"),
    phone: formData.get("phone"),
    venue: formData.get("venue"),
    message: formData.get("message"),
  };

  try {
    const validatedData = await schema.validate(plainObject, { abortEarly: false });
    console.log("Validated Data:", validatedData);

    return new FormDataResult(true, "Form submitted successfully", {});
  } catch (err: unknown) {
    if (err instanceof ValidationError) {
      const fieldErrors = getFieldErrors(err);

      return new FormDataResult(false, "", fieldErrors);
    }

    console.error("Unexpected Error:", err);
    throw new Error("An unexpected error occurred");
  }
}

const getFieldErrors = (err: ValidationError) => {
  const fieldErrors = err.inner.reduce((acc: { [key:string]: string }, curr: ValidationError) => {
    if (curr.path) {
      acc[curr.path] = curr.message; // Map field name to its error message
    }
    return acc;
  }, {} as Record<string, string>);

  return fieldErrors;
}