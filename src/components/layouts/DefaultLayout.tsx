"use client";

import { useState } from "react";

import Header from "./Header";
import "../../../i18n";
import { Footer } from "./Footer";

export const DefaultLayout = ({
  children,
  pageTitle,
  containerStyle,
  headerStyle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle: string;
  headerStyle?: string;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      // Xử lý sự kiện tại đây
      document.getElementById("input-search")?.focus();
    }
  };

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 ${containerStyle}`}
    >
      <div className="w-full" onKeyDown={handleKeyPress} tabIndex={50}>
        <Header headerStyle={headerStyle} />
        <div className="relative w-full mx-auto  min-h-[90vh]" id="box">
          {children}
        </div>
      </div>
    </main>
  );
};
