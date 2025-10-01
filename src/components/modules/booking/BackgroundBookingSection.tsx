import Image from "next/image";
import React from "react";
import { BgAboutUs } from "../../../../public/background";
import { IcListDot } from "../../../../public/icon";
import { initI18n } from "@/lib/i18n-server";

type Props = {};

const BackgroundBookingSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="">
      <div className="relative overflow-hidden">
        <Image
          src={BgAboutUs}
          width={1000}
          height={595}
          className="w-full object-cover"
          alt=""
          priority
        />

        {/* Middle content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="flex gap-2 h-[10px] justify-center mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src={IcListDot}
                width={10}
                height={10}
                alt=""
                className="w-fit"
              />
            ))}
          </div>
          <p className="text-white text-base sm:text-4xl md:text-5xl lg:text-6xl text-center font-playfair leading-tight">
            {t(`dining_experience`)}
          </p>
        </div>

        {/* Bottom Text */}
        <div className="absolute -bottom-4 sm:-bottom-12 md:-bottom-14 lg:-bottom-14 w-full">
          <p className="uppercase text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] text-center text-white font-playfair leading-none">
            {t(`form_submit`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBookingSection;
