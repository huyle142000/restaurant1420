import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { IcCake, IcChicken, IcMeat, IcWelcome } from "../../../../public/icon";
import { BgHalfRound } from "../../../../public/background";

type Props = {};

const WhyChooseUsSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="bg-[#F7F7F7] px-4 lg:px-48 py-20">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-7">
          <Image alt="" src={IcWelcome} width={130} height={22} />
        </div>
        <p className="uppercase font-playfair text-3xl sm:text-4xl md:text-5xl mt-5 mb-2">
          {t("why_choose_us_title")}
        </p>
        <p className="text-base sm:text-lg text-third">
          {t("why_choose_us_subtitle")}
        </p>
      </div>

      {/* Card Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {[
          {
            icon: IcChicken,
            title: t("highlight_dish_title"),
            desc: t("highlight_dish_description"),
          },
          {
            icon: IcMeat,
            title: t("hygiene_title"),
            desc: t("hygiene_description"),
          },
          {
            icon: IcCake,
            title: t("chef_title"),
            desc: t("chef_description"),
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white overflow-hidden rounded-md shadow-sm pt-40 px-6 pb-10"
          >
            {/* Background round image */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[280px] sm:max-w-[320px]">
              <Image
                alt=""
                src={BgHalfRound}
                className="w-full h-auto"
                width={360}
                height={360}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image alt="" src={item.icon} width={100} height={100} />
              </div>
            </div>

            {/* Text Content */}
            <p className="text-center text-2xl md:text-3xl font-playfair mt-6">
              {item.title}
            </p>
            <p className="text-center text-third font-tai mt-4 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
