import React from "react";

export const EllipseIcon = ({ color }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={4}
    height={4}
    viewBox="0 0 4 4"
    fill="none"
  >
    <circle cx={2} cy={2} r={2} fill={color || "#6B0E01"} />
  </svg>
);
