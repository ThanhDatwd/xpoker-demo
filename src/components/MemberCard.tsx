import Link from "next/link";
import Image from "next/image";
import React from "react";
import LazyLoad from "react-lazyload";
import Loader from "./common/Loader";

export const MemberCard = ({ url, name }: { url: string; name: string }) => {
  return (
    <Link
      href="/coming-soon"
      className="group flex flex-col xs:gap-4 md:gap-[20px] items-center w-full bg-white xs:px-4 xs:py-4 md:py-6 border border-[#9B968E] rounded-lg hover:scale-105 transaction duration-300 ease-out"
    >
      <LazyLoad once={true} placeholder={<Loader />}>
        <Image
          src={url}
          height={100}
          width={100}
          alt="Member"
          className="w-full"
        />
      </LazyLoad>
      <span className="group-hover:text-[#dd9933] text-center text-base">
        {name}
      </span>
    </Link>
  );
};
