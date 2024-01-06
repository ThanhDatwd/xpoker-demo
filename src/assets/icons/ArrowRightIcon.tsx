import React, { useState } from "react";

export const ArrowRightIcon = ({ color }: { color?: string }) => {
  const [isHover, setIsHover] = useState(false);
  return(
  <svg
    width="108"
    height="110"
    viewBox="0 0 108 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${isHover?"bg-[#ecf5ff]":''} rounded`}
    onMouseMove={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
  >
    <path
      d="M66.6802 85.6667L35.8469 54.8333L66.6802 24L72.1531 29.4729L46.7927 54.8333L72.1531 80.1937L66.6802 85.6667Z"
      fill={`${isHover?"#1B6DAD":"white"}`}
      fillOpacity="0.8"
    />
  </svg>
)};
