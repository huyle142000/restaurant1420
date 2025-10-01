import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { BgSponsor, BgWelcomeAboutUs } from "../../../../public/background";
import { IcRestaurant, IcWelcome } from "../../../../public/icon";

type Props = {};

const WelcomeToRestaurantSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");
  return (
    <div className="lg:px-48 px-4 py-28">
      <div className="relative">
        <Image src={BgWelcomeAboutUs} alt="" width={1300} height={620} />
        <div className="absolute right-1/2 translate-x-1/2 -bottom-20 flex justify-center w-full">
          <Image src={IcRestaurant} height={131} width={131} alt="" />
        </div>
      </div>
      <div className="pt-36">
        <div className="flex justify-center mb-7">
          <Image alt="" src={IcWelcome} width={130} height={22} />
        </div>
        <div>
          <p className="text-center text-[20px] font-bold font-tai">
            {t(`sub_slogan`)}
          </p>
          <p className="text-center text-[20px] font-tai">
            {t(`intro_description`)}
          </p>
        </div>
      </div>
      <div className="mt-32">
        <Image src={BgSponsor} alt="" width={1300} height={177} />
      </div>
    </div>
  );
};

export default WelcomeToRestaurantSection;
