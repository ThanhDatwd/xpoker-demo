import React from "react";

export const ChevronRightIcon = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_15_270"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect
        x="24"
        y="24"
        width="24"
        height="24"
        transform="rotate(-180 24 24)"
        fill="#D9D9D9"
      />
    </mask>
    <g mask="url(#mask0_15_270)">
      <path
        d="M9.99998 6.34616L15.6538 12L9.99998 17.6538L8.94616 16.6L13.5462 12L8.94616 7.39998L9.99998 6.34616Z"
        fill={props.color}
      />
    </g>
  </svg>
);
