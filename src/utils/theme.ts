import { THEME } from "./constants";

export const isDarkTheme = (theme: string | undefined) => {
  return theme === THEME.DARK;
};

export const chooseTheme = (theme: string, light: string, dark: string) => {
  if (theme === THEME.DARK) return dark;
  return light;
};
