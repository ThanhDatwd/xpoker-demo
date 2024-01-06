import React, { useState } from "react";
export const YoutubeIcon = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={21}
      viewBox="0 0 24 21"
      fill="none"
      onMouseMove={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <path
        d="M23.498 3.25c-.276-1.23-1.089-2.198-2.121-2.526C19.505.127 12 .127 12 .127s-7.505 0-9.377.597C1.591 1.052.777 2.02.502 3.25 0 5.478 0 10.127 0 10.127s0 4.648.502 6.877C.777 18.233 1.59 19.2 2.623 19.53c1.872.597 9.377.597 9.377.597s7.505 0 9.377-.597c1.032-.33 1.846-1.297 2.122-2.526.501-2.229.501-6.877.501-6.877s0-4.65-.502-6.877z"
        fill={isHover ? "#fff" : "#ED1D24"}
      />
      <path
        d="M9.545 14.347l6.273-4.22-6.273-4.221v8.441z"
        fill={isHover ? "#ED1D24" : "#fff"}
      />
    </svg>
  );
};
