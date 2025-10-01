import Image from "next/image";
import React from "react";
import { IcWhiteLogoText } from "../../../../public/logo";
import { initI18n } from "@/lib/i18n-server";
import {
  IcFb,
  IcIg,
  IcMail,
  IcOrangeRhombus,
  IcPhone,
  IcRhombus,
  IcTwitter,
  IcWhiteLocation,
  IcYoutube,
} from "../../../../public/icon";
import {
  BgFooter,
  BgFooter2,
  BgFooter3,
  BgFooter4,
  BgFooter5,
  BgFooter6,
} from "../../../../public/background";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  type?: "primary" | "second";
};

const Footer = async ({ type = "primary" }: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  const textColor =
    type === "second"
      ? "text-[#999999] font-jakarta"
      : "text-white font-jakarta";

  return (
    <div className={cn(`${type === "second" ? "bg-second" : "bg-[#BD4B00]"}`)}>
      <div className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + giờ mở cửa */}
          <div>
            <Image src={IcWhiteLogoText} alt="" width={150} height={70} />
            <p className={`${textColor} text-md my-6 font-jakarta`}>
              {t(`subscribe_text`)}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p
                  className={`uppercase text-sm font-bold ${
                    type === "second" ? "text-[#DD5903]" : "text-[#FFC49D]"
                  }`}
                >
                  {t(`opening_hours`)}
                </p>
                <p className="text-white font-jakarta font-bold text-lg">
                  08:00 AM - 12:00 PM
                </p>
              </div>
              <div>
                <p
                  className={`uppercase text-sm font-bold ${
                    type === "second" ? "text-[#DD5903]" : "text-[#FFC49D]"
                  }`}
                >
                  {t(`book_a_table`)}
                </p>
                <p className="text-white font-jakarta font-bold text-lg">
                  888 999 000 11
                </p>
              </div>
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <div className="flex gap-3 items-center">
              <Image
                src={type === "second" ? IcOrangeRhombus : IcRhombus}
                alt=""
                width={10}
                height={10}
              />
              <p className="text-lg font-bold text-white font-jakarta">
                {t(`get_in_touch`)}
              </p>
            </div>
            <div className="mt-8 grid gap-5">
              <div className="flex gap-4 items-center">
                <Image src={IcWhiteLocation} alt="" width={12} height={16} />
                <p className={textColor}>Silk St, Barbican, London E2Y, UK</p>
              </div>
              <div className="flex gap-4 items-center">
                <Image src={IcPhone} alt="" width={12} height={16} />
                <p className={textColor}>+39-055-123456</p>
              </div>
              <div className="flex gap-4 items-center">
                <Image src={IcMail} alt="" width={12} height={16} />
                <p className={textColor}>booking@webexample.com</p>
              </div>
            </div>
            <div className="flex gap-5 items-center mt-6">
              <Image src={IcFb} alt="" width={16} height={16} />
              <Image src={IcTwitter} alt="" width={16} height={16} />
              <Image src={IcYoutube} alt="" width={16} height={16} />
              <Image src={IcIg} alt="" width={16} height={16} />
            </div>
          </div>

          {/* Các trang */}
          <div>
            <div className="flex gap-3 items-center">
              <Image
                src={type === "second" ? IcOrangeRhombus : IcRhombus}
                alt=""
                width={10}
                height={10}
              />
              <p className={`text-lg font-bold ${textColor}`}>{t(`pages`)}</p>
            </div>
            <div className="mt-8 grid gap-2">
              {[
                { href: "/about_us", label: t("about_us") },
                { href: "/menu", label: t("our_menu") },
                { href: "/", label: t("our_chef_team") },
                { href: "/booking", label: t("nav_reservation") },
                { href: "/", label: t("contact_us") },
              ].map((item, i) => (
                <Link key={i} href={item.href}>
                  <p
                    className={`${textColor} hover:opacity-80 cursor-pointer text-sm font-bold capitalize`}
                  >
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Hình nhỏ */}
          <div>
            <div className="grid grid-cols-3 gap-4">
              {[
                BgFooter,
                BgFooter2,
                BgFooter3,
                BgFooter4,
                BgFooter5,
                BgFooter6,
              ].map((bg, i) => (
                <div key={i} className="w-full">
                  <Image src={bg} alt="" width={83} height={83} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={cn(
          `py-6 flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48 ${
            type === "second"
              ? "bg-second border-t border-t-[#262626]"
              : "bg-[#AE4500]"
          }`
        )}
      >
        <p className={textColor}>
          Copyright @2023 Dinenos by{" "}
          <span className="font-bold">ReacThemes</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
