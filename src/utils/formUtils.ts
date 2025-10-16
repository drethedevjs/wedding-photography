export const parseFormData = (form: EventTarget & HTMLFormElement) => {
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  return formJson;
};
