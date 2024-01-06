"use client";

import { FC, useEffect, useRef, useState } from "react";

interface Props {
  options: { label: string; value: string }[];
  defaultValue?: { label: string; value: string };
  onChange: (value: string) => void;
}
export const Switch: FC<Props> = ({ options, defaultValue, onChange }) => {
  const isFirstRender = useRef(true);
  const [chosen, setChosen] = useState<string>(options[0].label);

  useEffect(() => {
    if (defaultValue && isFirstRender.current) {
      setChosen(defaultValue?.label as string);
    }
  }, [defaultValue]);

  return (
    <div className="bg-gray-200 rounded-full w-full md:w-fit flex justify-end">
      {options.map((option) => (
        <button
          key={option.value}
          className={`rounded-full w-full md:w-fit px-2 pt-1 pb-2 whitespace-nowrap  ${
            chosen === option.label
              ? "text-white font-bold bg-primary"
              : "text-gray-400 font-thin"
          }`}
          onClick={() => {
            onChange(option.value);
            setChosen(option.label);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
