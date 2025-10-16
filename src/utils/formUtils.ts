export const parseFormData = <T>(form: EventTarget & HTMLFormElement) => {
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  return formJson as T;
};
