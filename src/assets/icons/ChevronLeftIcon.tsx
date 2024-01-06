import React from "react";

export const ChevronLeftIcon = (props: any) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_15_267"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_15_267)">
      <path
        d="M14 17.6538L8.34619 12L14 6.34619L15.0538 7.40002L10.4538 12L15.0538 16.6L14 17.6538Z"
        fill={props.color}
      />
    </g>
  </svg>
);
