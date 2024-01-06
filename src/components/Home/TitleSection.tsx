import { TitleIconLeft } from "@/assets/icons/TitleIconLeft";
import { TitleIconRight } from "@/assets/icons/TitleIconRight";
import React, { useEffect, useRef, useState } from "react";

export const TitleSection = ({ title }: { title: string }) => {
  const titleRef = useRef<any>(null);
  const [heightTitle, setHeightTitle] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      let height = titleRef.current.offsetHeight;
      setHeightTitle(height);
    }
  }, []);
  return (
    <div className="z-10 flex items-center justify-center gap-8">
      <div className="xs:hidden lg:block">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="107"
          height="12"
          viewBox="0 0 107 12"
          fill="none"
        >
          <path
            d="M106.274 6L100.5 0.226497L94.7265 6L100.5 11.7735L106.274 6ZM0.5 7H100.5V5H0.5V7Z"
            fill="#6B0E01"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center">
        <div className="translate-x-[2px]">
          <TitleIconLeft height={heightTitle} />
        </div>
        <div ref={titleRef} className="py-3 bg-[#6B0E01] w-fit ">
          <span className="text-[#fff] text-[24px] lg:text-[64px] font-amatica">
            {title}
          </span>
        </div>
        <div className="-translate-x-[2px]">
          <TitleIconRight height={heightTitle} />
        </div>
      </div>
      <div className="xs:hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="12"
          viewBox="0 0 106 12"
          fill="none"
        >
          <path
            d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM6 7H106V5H6V7Z"
            fill="#6B0E01"
          />
        </svg>
      </div>
    </div>
  );
};
