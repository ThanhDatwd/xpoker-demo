import React from "react";

export const TitleIconLeft = ({ height = 120 }: { height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44 * (height / 120)}
    height={height}
    viewBox={`0 0 44 120`}
    fill="none"
  >
    <path
      d={`M42.5 120H18.8664C26.2793 75.7322 16.4119 64.7685 0.5 53C16.5 41 26 31.5 18.8664 0H42.5L42.5 120Z`}
      fill="#6B0E01"
    />
  </svg>
);
