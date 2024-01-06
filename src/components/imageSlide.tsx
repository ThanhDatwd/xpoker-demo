"use client";

import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

interface Props {
  imageListUrl: string[];
  imagePerPage?: number;
}

export const ImagesSlide: FC<Props> = ({ imageListUrl, imagePerPage = 1 }) => {
  console.log(imageListUrl);
  return (
    <Swiper
      navigation={true}
      slidesPerView={imagePerPage}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="min-w-[300px] "
    >
      {imageListUrl &&
        imageListUrl.map((value, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img className=" aspect-[1/1] " alt={`${index}`} src={value} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
