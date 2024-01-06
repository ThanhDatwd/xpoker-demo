"use client";

import Link from "next/link";
import { FC, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  imageListUrl: string[];
  imagePerPage?: number;
}

export const ImagesSwiper: FC<Props> = ({ imageListUrl, imagePerPage = 1 }) => {
  const [images, setImages] = useState<Array<string>>();

  return (
    <Swiper
      navigation={true}
      slidesPerView={imagePerPage}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="max-w-[300px] md:max-w-[700px]"
    >
      {images &&
        images.map((value, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="flex justify-center">
                <div className="w-full md:px-10 border-dotted border-2 border-white/[.1]">
                  <Link href={value}>
                    <img alt={`${index}`} src={value} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
