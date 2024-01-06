"use client";

import { THEME } from "@/utils/constants";
import { FC, PropsWithChildren, createContext, useState } from "react";

interface ThemeCtxProps {
  theme: string;
  toggleTheme: () => void;
}

const defaultCtxVal: ThemeCtxProps = {
  theme: THEME.LIGHT,
  toggleTheme: (): void => {},
};
export const ThemeCtx = createContext<ThemeCtxProps>(defaultCtxVal);
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>(THEME.LIGHT);

  const toggleTheme = () => {
    const cunrrentTheme = document.documentElement.getAttribute("class");
    const themeUpdated =
      cunrrentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(themeUpdated);
    document.documentElement.setAttribute("class", themeUpdated);
    document.documentElement.setAttribute(
      "style",
      `color-scheme: ${themeUpdated};`,
    );
  };

  return (
    <ThemeCtx.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
};
