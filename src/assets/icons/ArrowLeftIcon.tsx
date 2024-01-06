import React from "react";

export const ArrowLeftIcon = ({ color }: { color?: string }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_7_266"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="24"
    >
      <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_7_266)">
      <path
        d="M13.4462 12L8.84618 7.40002L9.9 6.34619L15.5538 12L9.9 17.6538L8.84618 16.6L13.4462 12Z"
        fill={color}
      />
    </g>
  </svg>
);
