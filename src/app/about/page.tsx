"use client";
/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import Loader from "@/components/common/Loader";
import LazyLoad from "react-lazyload";

const PageAbout = () => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <DefaultLayout
      pageTitle="Dashboard"
      containerStyle="bg-[#F0EDE7] dark:bg-[#222327]"
      headerStyle={"bg-[transparent]"}
    >
      <div
        className="relative bg-cover"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center ">
          <LazyLoad once={true} placeholder={<Loader />}>
            <img
             className="w-[100vw] h-[100vh]"
              src={`${window.location.origin}/assets/images/background.jpg`}
              alt="logo"
            />
          </LazyLoad>
        </div>
        <div className="absolute top-0 left-0 w-full h-full p-[100px] flex flex-col justify-center items-center ">
          <LazyLoad once={true} placeholder={<Loader />}>
            <img
            className="w-[100%] h-[100%]"
              src={`${window.location.origin}/assets/images/about_banner.png`}
              alt="logo"
            />
          </LazyLoad>
        </div>
        <div className="absolute bottom-[10px] w-full flex flex-col justify-end items-center ">
          <div className="flex items-center flex-col z-20 justify-center gap-[60px] flex-wrap">
            <div className="flex flex-col items-center justify-end">
              <span className="text-[10px] text-[#D2D7E5]">
                Privacy Policy | Term of Use
              </span>
              <span className="text-[10px] text-[#D2D7E5]">
                Copyright (C) 2019-2021 X-Poker. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default PageAbout;
