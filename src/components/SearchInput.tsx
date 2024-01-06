"use client";

import { FC } from "react";

import { SearchIcon } from "@/assets/icons/SearchIcon";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";

interface SearchInputProps {
  initValue?: string;
  placeholder?: any;
  onChange: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  initValue,
  placeholder,
  onChange,
}) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-2 border dark:border-white border-black p-2 mb-5 md:mb-0 rounded-xl">
      <SearchIcon color={isDarkTheme(theme) ? "#ffffff" : "#000000"} />
      <input
        spellCheck={false}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        placeholder={placeholder || ""}
        className="bg-transparent leading-[28px] outline-none lg:max-w-[80px] xl:max-w-none"
      />
    </div>
  );
};
