/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "../Logo";
import Link from "next/link";
import { getStaticURL } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";

const Header = ({ headerStyle }: { headerStyle?: string }) => {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const pathname = usePathname();
  console.log("this is pathe nae", pathname);
  return (
    <div className="w-full fixed top-0 z-50  mt-[24px]">
      <nav
        className={`bg-[#222327] mx-auto xs:px-3 lg:px-14 flex items-center justify-between transition-all shadow-none duration-250 ease-soft-in ${headerStyle}`}
        navbar-scroll="true"
      >
        <Logo />
        <div className="lg:flex items-center gap-8 hidden">
          <Link
            href={"/"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px]  ${
              pathname === "/" && "text-[#CEEAFF]"
            } text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/" && "after:scale-x-100"
            }  ${
              pathname === "/" && "after:border-[#CEEAFF]"
            } hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            HOME
          </Link>
          <Link
            href={"/about"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px]  ${
              pathname === "/about" && "text-[#CEEAFF]"
            } text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/about" && "after:scale-x-100"
            } ${
              pathname === "/about" && "after:border-[#CEEAFF]"
            } hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            ABOUT
          </Link>
          <Link
            href={"/contact-us"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] ${
              pathname === "/contact-us" && "text-[#CEEAFF]"
            } text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${
              pathname === "/contact-us" && "after:scale-x-100"
            } ${
              pathname === "/contact-us" && "after:border-[#CEEAFF]"
            } hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            CONTACT US
          </Link>
        </div>
        <div className="w-[236px] flex justify-end">
          <img
            className=" xs:hidden md:block"
            src={`assets/images/right_image.png`}
            alt=""
          />
          <div className=" md:hidden p-2 cursor-pointer " onClick={toggleMenu}>
            <MenuIcon color="#fff" />
          </div>
        </div>
      </nav>
      <div className="relative w-full md:w-[38%] lg:w-[28%] xl:w-auto h-full">
        <div
          className={`z-50 max-w-auto lg:hidden fixed inset-y-0 top-0 px-2 left-0 flex-wrap items-center justify-between overflow-y-auto border-0 p-0 shadow-none transition-all duration-300 w-full bg-white dark:bg-black ${
            isMenuOpen
              ? "translate-x-0 shadow-soft-xl"
              : "-translate-x-[-100%] md:-translate-x-[-200%]"
          } `}
        >
          <div className="flex justify-between mt-4 p-4">
            <div className=" cursor-pointer" onClick={toggleMenu}>
              <CloseIcon color="#111" />
            </div>
            <div className="flex items-center justify-between gap-4 ">
              <img src={`assets/images/logo.png`} alt="" />
            </div>
          </div>
          <div className="flex flex-col px-4 pt-6">
            <Link
              href={"/"}
              className={`relative block py-2 whitespace-nowrap text-start text-[24px] text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100 hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
            >
              HOME
            </Link>
            <Link
              href={"/about"}
              className={`relative block py-2 whitespace-nowrap text-start text-[24px] text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100 hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
            >
              ABOUT
            </Link>
            <Link
              href={"/contact-us"}
              className={`relative block py-2 whitespace-nowrap text-start text-[24px] text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100 hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
            >
              CONTACT US
            </Link>
          </div>
          <div className="px-4 py-8 flex items-center">
              <div className="w-[70%]  h-[3px] bg-[#3f84a7]"></div>
          </div>
          <div className="px-4 py-2 flex flex-col gap-3">
            <span className="text-start text-[24px] text-[#63B8E4]">CERTIFICATION</span>
            <div className="flex-wrap w-full">
              <img className="w-full" src={`assets/images/certified.png`} alt="" />
            </div>
          </div>


          <div className="absolute w-full bottom-8 flex flex-col items-center ">
            <span className="text-[12px] text-[#63B8E4] ">
              Privacy Policy | Term of Use
            </span>
            <span className="text-[12px] text-[#63B8E4]">
              Copyright (C) 2019-2021 X-Poker. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
