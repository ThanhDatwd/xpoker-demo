import React from "react";
import useMediaQuery from "@bedrock-layout/use-media-query";

export const ArrowIcon = (props: any) => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  return (
    <svg
      width={isMobile ? " 30" : "203"}
      height={isMobile ? "20" : "50"}
      viewBox="0 0 203 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M202.206 41.697C202.596 41.3065 202.596 40.6733 202.206 40.2828L195.841 33.9192C195.451 33.5286 194.818 33.5287 194.427 33.9192C194.037 34.3098 194.037 34.9429 194.427 35.3334L200.084 40.99L194.428 46.6471C194.037 47.0377 194.037 47.6709 194.428 48.0614C194.819 48.4519 195.452 48.4518 195.842 48.0613L202.206 41.697ZM0.496266 42L201.499 41.9899L201.499 39.9899L0.496166 40L0.496266 42Z"
        fill="#17191F"
      />
    </svg>
  );
};
