"use client";
/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import Loader from "@/components/common/Loader";
import LazyLoad from "react-lazyload";
import { IconFaceBook } from "@/assets/icons/IconFacebook";
import { MailIcon } from "@/assets/icons/MailIcon";
import Link from "next/link";
import { TelegramIcon } from "@/assets/icons/TelegramIcon";

const PageContact = () => {
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
        className="relative bg-cover "
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center ">
          <LazyLoad once={true} placeholder={<Loader />}>
            <img
              className="w-[100vw] h-[100vh]"
              src={`assets/images/background.jpg`}
              alt="logo"
            />
          </LazyLoad>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
          {/* <LazyLoad
            once={true}
            placeholder={<Loader />}
            className="w-[350px]"
          >
            <img
              className="w-[100%] "
              src={`assets/images/contact_us.png`}
              alt="logo"
            />
          </LazyLoad> */}
          <div className="relative w-[400px] max-w-[95%] mx-auto rounded-lg mt-16">
            <img
              className="z-2 w-[120px] h-[120px] absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
              src={`assets/images/logo_circle.png`}
              alt="logo"
            />
            <img
              className=" absolute top-0 left 0 w-full h-full rounded-lg "
              src={`assets/images/contact_form.jpg`}
              alt="logo"
            />
            <div className=" absolute top-0  z-1 bg-gradient-to-b from-black via-transparent to-transparent bg-opacity-20 w-full h-[400px] rounded-lg"></div>
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-8 py-24 px-16">
              <span className="text-[24px] font-bold text-white">X-POKER</span>
              <div className="flex flex-col justify-center items-center gap-10 px-[200px]">
                <Link target="_blank" href={"https://t.me/xpksupport"} className="bg-white px-4 py-4 font-semibold cursor-pointer rounded w-full text-center flex items-center gap-3">
                 <div className="mt-1"> 
                 <TelegramIcon/>
                 
                 </div>
                  <div className="w-full text-center text-[#5e6b84]">T.ME/XPKSUPPORT</div>
                </Link>
                <Link target="_blank" href={"https://www.facebook.com/XPokerglobal"} className="bg-[#447ef5] text-white px-4 py-4  font-semibold cursor-pointer rounded w-full text-center flex items-center gap-3">
                  <IconFaceBook />
                  FACEBOOK.COM/XPOKERGLOBAL
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10px] w-full flex flex-col justify-end items-center ">
          <div className="flex items-center flex-col z-20 justify-center gap-[60px] flex-wrap ">
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
export default PageContact;
