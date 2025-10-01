"use client";

import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React, { useState } from "react";
import { IcWhiteLogoText } from "../../../../public/logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="w-full">
      <div className="hidden lg:flex h-[80px] items-stretch w-full">
        {/* Logo */}
        <div className="bg-primary px-12 flex items-center justify-start basis-[15%] h-full">
          <Image width={130} height={60} src={IcWhiteLogoText} alt="" />
        </div>

        {/* Nav */}
        <div className="flex gap-9 justify-center items-center bg-[#292929] basis-[70%] h-full">
          <Link href={"/"}>
            <p className="text-white uppercase text-sm font-medium font-lexend">
              {t(`home`)}
            </p>
          </Link>
          <Link href={"/about_us"}>
            <p className="text-white uppercase text-sm font-medium font-lexend">
              {t(`about_us`)}
            </p>
          </Link>
          <Link href={"/menu"}>
            <p className="text-white uppercase text-sm font-medium font-lexend">
              {t(`menu`)}
            </p>
          </Link>
          <p className="text-white uppercase text-sm font-medium font-lexend">
            {t(`contact`)}
          </p>
        </div>

        {/* Book a table */}
        <div className="flex flex-col items-center justify-center basis-[15%] bg-black h-full">
          <p className="text-third text-sm font-bold font-jakarta uppercase">
            {t(`book_a_table`)}
          </p>
          <p className="text-lg font-bold text-white font-jakarta">
            888 999 000 11
          </p>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center bg-primary px-12 py-5">
        <Image width={130} height={60} src={IcWhiteLogoText} alt="" />
        <button onClick={() => setOpenMenu(!openMenu)} className="text-white">
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (visible only if open) */}
      {openMenu && (
        <div className="lg:hidden bg-[#292929] px-6 py-6 flex flex-col gap-5">
          <Link href={"/"} onClick={() => setOpenMenu(false)}>
            <p className="text-white uppercase text-sm font-medium font-lexend">
              {t(`home`)}
            </p>
          </Link>
          <Link href={"/about_us"} onClick={() => setOpenMenu(false)}>
            <p className="text-white uppercase text-sm font-medium font-lexend">
              {t(`about_us`)}
            </p>
          </Link>
          <Link href={"/menu"} onClick={() => setOpenMenu(false)}>
            <p className="text-white uppercase text-sm font-medium font-lexend">
              {t(`menu`)}
            </p>
          </Link>
          <p className="text-white uppercase text-sm font-medium font-lexend">
            {t(`contact`)}
          </p>
          <div className="pt-6 border-t border-white">
            <p className="text-third text-sm font-bold font-jakarta uppercase">
              {t(`book_a_table`)}
            </p>
            <p className="text-lg font-bold text-white font-jakarta">
              888 999 000 11
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
