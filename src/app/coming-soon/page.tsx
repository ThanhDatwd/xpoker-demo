"use client";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Image from "next/image";
import { getStaticURL } from "@/utils/constants";
import LazyLoad from "react-lazyload";
import Loader from "@/components/common/Loader";

export default function ComingSoon() {
  const { t } = useTranslation();
  return (
    <DefaultLayout
      pageTitle="Coming Soon"
      containerStyle="bg-white dark:bg-[#222327]"
      headerStyle={"bg-[transparent]"}
    >
      <LazyLoad once={true} placeholder={<Loader />}>
        <div
          className="relative flex flex-col gap-[22px] xs:items-center justify-center text-[40px] w-full h-[100vh] xs:px-4 xs:py-8 xs:mt-0 bg-cover "
          style={{
            backgroundImage: `url('${getStaticURL()}/assets/images/background.jpg')`,
            backgroundPosition: "center",
          }}
        >
          <h2 className="z-10 xs:text-[32px] md:text-[64px] font-semibold text-white">
            COMING SOON!
          </h2>
          <div className="z-10 flex flex-col w-full xs:items-center xs:gap-1 md:gap-4 text-white xs:text-base md:text-[40px] leading-normal text-center">
            <span>Currently this feature has not been released</span>
            <span>We will try to complete it as soon as possible</span>
            <span>Please come back later</span>
          </div>
        </div>
      </LazyLoad>
    </DefaultLayout>
  );
}
