import React from "react";

export const DropdownIconUp = ({ color }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0H24V24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M12 15.038L6.346 9.385 7.4 8.33l4.6 4.6 4.6-4.6 1.054 1.054L12 15.038z"
        fill={color || "#333"}
      />
    </g>
  </svg>
);
