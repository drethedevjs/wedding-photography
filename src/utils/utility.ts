export const capitalize = (word: string) => {
  if (typeof word !== "string") return "";
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
