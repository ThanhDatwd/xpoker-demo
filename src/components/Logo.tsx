/* eslint-disable @next/next/no-img-element */
"use client";

import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className=" xs:h-12 lg:h-[60px] w-[236px] z-20" href={"/"}>
      <img
        className="w-full h-full "
        src={`${getStaticURL()}/assets/images/logo.png`}
        alt="metamask"
      />
    </Link>
  );
};
