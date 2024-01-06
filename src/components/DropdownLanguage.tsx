"use client";

import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  className?: string;
  overlayBgStyle?: string;
  modalLanguageStyle?: string;
  languageItemStyle?: string;
  colorIcon?: string;
}

export const DropdownLanguage: FC<Props> = ({
  defaultValue,
  title,
  options,
  onChange,
  className,
  overlayBgStyle = "bg-opacity-0",
  modalLanguageStyle,
  languageItemStyle = "py-2",
  colorIcon,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosen, setChosen] = useState<{
    label: string;
    value: string;
  }>();
  const [defaultVal, setDefaultVal] = useState<{
    label: string;
    value: string;
  }>();

  useEffect(() => {
    if (defaultValue) {
      setDefaultVal(defaultValue);
    }
  }, [defaultValue]);

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      className="flex justify-center md:inline-block text-left w-full relative"
      ref={ref}
    >
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`group inline-flex items-center w-full gap-x-1.5 rounded-lg  py-1 mt-1 text-[16px] whitespace-nowrap ${className}`}
        >
          <LanguageIcon
            color={colorIcon || "#ffffff"}
            className="group-hover:rotate-[20deg]"
          />
          {defaultVal?.label}
        </button>
      </div>
      <div
        className={`absolute  z-30 shadow-lg top-10 right-0 focus:outline-none ease-linear scale-0 origin-top-right duration-200 ${
          isOpen ? "opacity-1 scale-100" : "opacity-0"
        } ${modalLanguageStyle}`}
      >
        <div className="relative bg-[#DCD3C9] border border-[#9B968E] p-1">
          <div className=" absolute top-0 left-0 w-full z-10 flex justify-between">
            <div className="w-[10px] h-[10px] border-r border-b border-[#9B968E] "></div>
            <div className="w-[10px] h-[10px] border-l border-b border-[#9B968E] "></div>
          </div>
          <div className="relative bg-[#DCD3C9] border border-[#9B968E] h-full flex flex-col justify-center gap-2 p-2">
            {options.map((options, i) => (
              <div
                key={i}
                onClick={() => {
                  if (chosen?.label !== options.label) {
                    onChange(options.value);
                    setChosen(options);
                    setIsOpen(false);
                    setDefaultVal({ value: "", label: "" });
                  }
                }}
                className={`block px-4 text-sm ${
                  chosen?.label !== options.label
                    ? "cursor-pointer hover:bg-primary dark:hover:bg-secondaryDark text-dark dark:text-[#FAFAFA]"
                    : "dark:text-[#FAFAFA] bg-primary dark:bg-secondaryDark "
                } ${languageItemStyle} `}
              >
                {options.label}
              </div>
            ))}
          </div>
          <div className=" absolute bottom-0 left-0 w-full z-10 flex justify-between">
            <div className="w-[10px] h-[10px] border-r border-t border-[#9B968E]"></div>
            <div className="w-[10px] h-[10px] border-l border-t border-[#9B968E]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
