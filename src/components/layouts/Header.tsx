/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "../Logo";
import Link from "next/link";
import {  getStaticURL } from "@/utils/constants";
import {usePathname } from "next/navigation";

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
  console.log('this is pathe nae',pathname)
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
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px]  ${pathname==='/'&&"text-[#CEEAFF]"} text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${pathname==='/'&&"after:scale-x-100"}  ${pathname==='/'&&"after:border-[#CEEAFF]"} hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            HOME
          </Link>
          <Link
            href={"/about"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px]  ${pathname==='/about'&&"text-[#CEEAFF]"} text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${pathname==='/about'&&"after:scale-x-100"} ${pathname==='/about'&&"after:border-[#CEEAFF]"} hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            ABOUT
          </Link>
          <Link
            href={"/contact-us"}
            className={`tracking-wider relative block py-2 whitespace-nowrap text-start text-[16px] ${pathname==='/contact-us'&&"text-[#CEEAFF]"} text-[#63B8E4] after:content-[''] after:block  after:absolute after:w-full after:border-t-2 after:border-[#1111]  after:bottom-[6px] after:left-0 after:scale-x-0 hover:after:scale-x-100  ${pathname==='/contact-us'&&"after:scale-x-100"} ${pathname==='/contact-us'&&"after:border-[#CEEAFF]"} hover:after:border-[#CEEAFF] after:transition-transform after:transition-border-color after:duration-300 ease-out`}
          >
            CONTACT US
          </Link>
         
        </div>
        <div className="w-[236px] flex justify-end">
          <img src={`${window.location.origin}/assets/images/right_image.png`} alt="" />
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
