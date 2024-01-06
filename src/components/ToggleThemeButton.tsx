"use client";

import { NightModeIcon } from "@/assets/icons/NightModeIcon";
import { DayModeIcon } from "@/assets/icons/DayModeIcon";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center ml-3">
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="light-switch sr-only"
        checked={theme === THEME.LIGHT}
        onChange={toggleTheme}
      />
      <label className="relative cursor-pointer p-2" htmlFor="light-switch">
        {theme === THEME.DARK ? <DayModeIcon /> : <NightModeIcon />}
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
};
