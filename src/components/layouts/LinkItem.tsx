"use client";

import React from "react";
import Link from "next/link";

type Props = {
  icon?: React.ReactNode;
  title: string;
  href: string;
  isSidebarOpen: boolean;
};

const LinkItem = (props: Props) => {
  const { title, isSidebarOpen } = props;

  return (
    <Link
      className={`group relative flex items-center  gap-2.5 rounded-sm px-3 py-2 font-medium  duration-300 ease-in-out  dark:hover:text-white `}
      href={props.href}
    >
      <div className="">{props.icon}</div>
      <p>{isSidebarOpen && title}</p>
    </Link>
  );
};

export default LinkItem;
