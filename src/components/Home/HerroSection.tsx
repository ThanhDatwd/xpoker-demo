/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";
import Loader from "../common/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

export const HerroSection = () => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className="relative bg-cover"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
       
        // navigation={true}
        navigation={{
          prevEl:".prev-slider-xpoker",
          nextEl:".next-slider-xpoker",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index: number, className: any) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        autoplay={{
          delay: 2500,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full ">
            <img
              src={`assets/images/banner_1.png`}
              className="w-full h-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={`assets/images/banner_2.jpg`}
              className="w-full h-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={`assets/images/banner_3.jpg`}
              className="w-full h-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <button
          ref={nextRef}
          className=" next-slider-xpoker absolute z-[100] top-[50%] xs:right-[0px] md:right-[120px] -translate-y-[50%] rotate-180 hover:bg-[#ecf5ff98] rounded "
        >
          <ArrowRightIcon color="#6B0E01" />
        </button>
        <button
          ref={prevRef}
          className=" prev-slider-xpoker absolute z-[100] top-[50%] xs:left-[0px] md:left-[100px] -translate-y-[50%] hover:bg-[#ecf5ff98] rounded "
        >
          <ArrowRightIcon color="#6B0E01" />{" "}
        </button>
        
        <div className="absolute bottom-[10px] w-full flex flex-col justify-end items-center ">
        <div className="flex items-center flex-col z-10 justify-center gap-[60px] flex-wrap">
          <div className="flex items-center z-20 justify-center gap-4 flex-wrap ">
            <Link href={"/coming-soon"}>
              <img
                src={`assets/images/download_ios.png`}
                alt=""
              />
            </Link>
            <Link href={"/coming-soon"}>
              <img
                src={`assets/images/download_android.png`}
                alt=""
              />
            </Link>
            <Link href={"/coming-soon"}>
              <img
                src={`assets/images/download_windows.png`}
                alt=""
              />
            </Link>
          </div>
          <div className="w-full swiper-pagination"></div>
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
      </Swiper>
    </div>
  );
};
