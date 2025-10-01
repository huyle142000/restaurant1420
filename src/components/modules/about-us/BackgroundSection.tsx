import Image from "next/image";
import React from "react";
import { BgAboutUs } from "../../../../public/background";
import { IcListDot } from "../../../../public/icon";
import { initI18n } from "@/lib/i18n-server";

type Props = {};

const BackgroundSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="">
      <div className="relative overflow-hidden">
        <Image
          src={BgAboutUs}
          width={1000}
          height={595}
          className="w-full h-auto object-cover"
          alt=""
          priority
        />

        {/* Dot and Slogan Section */}
        <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-full px-4">
          <div className="flex gap-2 justify-center h-[10px]">
            {[...Array(3)].map((_, idx) => (
              <Image
                key={idx}
                src={IcListDot}
                width={10}
                height={10}
                className="w-fit"
                alt=""
              />
            ))}
          </div>
          <p className="text-white text-base text-center mt-6 font-playfair  sm:text-4xl md:text-5xl lg:text-6xl">
            {t(`slogan`)}
          </p>
        </div>

        {/* About Us Large Text */}
        <div className="absolute -bottom-5 md:-bottom-12 lg:-bottom-10 w-full px-2">
          <p className="uppercase text-center text-white font-playfair text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] leading-none">
            {t(`about_us`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
