"use client";

import { DropdownIconUp } from "@/assets/icons/DropdownIcon";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  options: { label: string; link: string }[];
  onChange: (value: string) => void;
  className?: string;
  classNameDropdown?: string;
  hideIcon?: boolean;
  tooltipStyle?: string;
}

export const Tooltip: FC<Props> = ({
  title,
  options,
  onChange,
  className,
  hideIcon,
  tooltipStyle = "bg-white dark:bg-primaryDark",
}) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const ClickOutside = (ref: any, onClickOutside: () => void) => {
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  };
  ClickOutside(ref, () => {
    setIsShowTooltip(false);
  });
  return (
    <div className="group inline-block text-left relative" ref={ref}>
      <button
        onClick={() => setIsShowTooltip(!isShowTooltip)}
        type="button"
        className={`inline-flex w-full justify-center items-center gap-1 h-[28px] rounded-lg px-1 py-1 text-md whitespace-nowrap hover:text-[#3B3BFC] dark:hover:text-[#DA6C1D] ${className}`}
      >
        <span className="mb-1">{t(`${title}.title`)}</span>
        <span className={isShowTooltip ? "rotate-180" : ""}>
          <DropdownIconUp color={isDarkTheme(theme) ? "#ffffff" : "#000000"} />
        </span>
      </button>
      <div
        className={`px-5 absolute top-[28px] py-10 z-10 ${
          isShowTooltip ? "opacity-100" : ""
        } ${
          isShowTooltip ? "visible" : "invisible"
        } rounded-md ${tooltipStyle} shadow-lg focus:outline-none`}
      >
        <div className="flex flex-col gap-2">
          {options.map((option, i) => (
            <Link
              href={option.link ?? "/"}
              key={i}
              className={`block px-4 py-2 whitespace-nowrap text-start text-sm hover:text-[#3B3BFC]`}
            >
              {t(`${title}.${option.label}`)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
