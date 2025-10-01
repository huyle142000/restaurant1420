import Image from "next/image";
import React from "react";
import { BgAboutUs } from "../../../../public/background";
import { IcListDot } from "../../../../public/icon";
import { initI18n } from "@/lib/i18n-server";

type Props = {
  title?: string;
};

const BackgroundMenuSection = async ({ title }: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <Image
          src={BgAboutUs}
          width={1920}
          height={595}
          className="w-full h-auto object-cover"
          alt=""
          priority
        />

        {/* Dấu chấm giữa ảnh */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-screen-xl px-4">
          <div className="flex gap-2 justify-center h-[10px]">
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src={IcListDot}
                width={10}
                height={10}
                className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]"
                alt=""
              />
            ))}
          </div>
          <p className="text-white text-center font-playfair mt-5 text-base sm:text-5xl lg:text-6xl">
            {title ?? t(`seasonal_culinary_excellence`)}
          </p>
        </div>

        {/* Text MENU ở dưới cùng */}
        <div className="absolute -bottom-6 sm:-bottom-10 w-full">
          <p className="uppercase text-center text-white font-playfair text-[80px] sm:text-[140px] md:text-[180px] lg:text-[200px] leading-none">
            {t(`menu`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMenuSection;
