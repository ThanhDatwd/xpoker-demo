import React from "react";

export const ArrowNextIcon = ({ color }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
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
        d="M14.836 18.663l-1.069-1.044 4.88-4.879H2.5v-1.5h16.156l-4.864-4.878 1.044-1.045 6.674 6.673-6.674 6.673z"
        fill={color}
      />
    </g>
  </svg>
);
