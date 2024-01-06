import React from "react";

export const StarIcon = (props: any) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_54_110"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="21"
    >
      <rect y="0.253082" width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_54_110)">
      <path
        d="M7.37495 15.1073L9.99995 13.5239L12.625 15.1281L11.9375 12.1281L14.25 10.1281L11.2083 9.85725L9.99995 7.02392L8.79162 9.83642L5.74995 10.1072L8.06245 12.1281L7.37495 15.1073ZM5.47916 17.721L6.67305 12.58L2.68433 9.12329L7.9471 8.66658L9.99995 3.81887L12.0528 8.66658L17.3156 9.12329L13.3268 12.58L14.5207 17.721L9.99995 14.9934L5.47916 17.721Z"
        fill={props.color}
      />
    </g>
  </svg>
);
