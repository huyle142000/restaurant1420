import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { IcWelcome } from "../../../../public/icon";
import { BgDinner } from "../../../../public/background";

type Props = {};

const DesertAndFoodSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="lg:px-48 px-4 py-20 sm:py-28 bg-[#000]">
      {/* Header */}
      <div>
        <div className="flex justify-center mb-5 sm:mb-7">
          <Image
            alt=""
            src={IcWelcome}
            width={130}
            height={22}
            className="w-[90px] sm:w-[130px] h-auto"
          />
        </div>
        <p className="text-center uppercase text-3xl sm:text-5xl mt-5 mb-2 font-playfair text-white">
          {t(`menu_title`)}
        </p>
        <p className="text-base sm:text-lg text-center text-third">
          {t(`menu_description`)}
        </p>
      </div>

      {/* Grid items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-14 gap-8">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="relative">
            {/* Date label */}
            <div className="absolute top-0 left-4 sm:left-12 z-10">
              <p className="py-1.5 sm:py-2 text-white px-3 sm:px-4 bg-primary font-bold text-sm sm:text-base">
                02/ 03/ 2025
              </p>
            </div>

            {/* Image */}
            <Image
              src={BgDinner}
              width={420}
              height={418}
              alt=""
              className="w-full h-auto object-cover"
            />

            {/* Bottom content */}
            <div className="absolute w-full bottom-0 py-4 px-6 sm:px-12 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-primary text-sm font-bold uppercase">
                {t(`dinner`)}
              </p>
              <p className="text-white text-xl sm:text-2xl mt-1">
                {t(`dinner_quote`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesertAndFoodSection;
