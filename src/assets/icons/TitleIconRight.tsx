import React from "react";

export const TitleIconRight = ({ height = 60 }: { height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44 * (height / 120)}
    height={height}
    viewBox={`0 0 44 120`}
    fill="none"
  >
    <path
      d={`M0.5 0H24.1336C16.7207 28.2678 26.5881 39.2315 42.5 51C26.5 63 17 72.5 24.1336 120H0.5V0Z`}
      fill="#6B0E01"
    />
  </svg>
);
