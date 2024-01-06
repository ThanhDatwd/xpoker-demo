export const convertString = (value: string): string => {
  if (!value) return "";
  return `${value.slice(0, 4)}...${value.slice(
    value.length - 4,
    value.length,
  )}`;
};
