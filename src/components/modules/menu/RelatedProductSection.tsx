import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { IcEmptyStar, IcStar, IcWelcome } from "../../../../public/icon";
import {
  BgFood,
  BgFood2,
  BgFood3,
  BgFood4,
  BgFood5,
} from "../../../../public/background";

type Props = {};

const RelatedProductSection = async () => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");
  return (
    <div className="lg:p-48 p-4 bg-[#F7F7F7]">
      <div>
        <div className="flex justify-center mb-7">
          <Image alt="" src={IcWelcome} width={130} height={22} />
        </div>
        <p className="text-center uppercase text-5xl mt-5 mb-2 font-playfair">
          {t(`related_products`)}
        </p>
        <p className="text-lg text-center text-third">
          {t(`related_products_subtitle`)}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="col-span-1">
          <div className="h-[315px]">
            <Image
              src={BgFood2}
              className="h-full w-full object-cover"
              width={315}
              height={315}
              alt=""
            />
          </div>
          <div className="flex gap-1 justify-center mt-8">
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcEmptyStar} width={16} height={16} />
            <Image alt="" src={IcEmptyStar} width={16} height={16} />
          </div>
          <p className="text-[20px] mt-3 mb-1 text-center font-jakarta">
            Chicha Morada
          </p>
          <p className="font-jakarta text-primary text-center">$33.00</p>
        </div>
        <div className="col-span-1">
          <div className="h-[315px]">
            <Image
              src={BgFood3}
              className="h-full w-full object-cover"
              width={315}
              height={315}
              alt=""
            />
          </div>
          <div className="flex gap-1 justify-center mt-8">
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
          </div>
          <p className="text-[20px] mt-3 mb-1 text-center font-jakarta">
            Tommy’s Margarita
          </p>
          <p className="font-jakarta text-primary text-center">$33.00</p>
        </div>
        <div className="col-span-1">
          <div className="h-[315px]">
            <Image
              src={BgFood4}
              className="h-full w-full object-cover"
              width={315}
              height={315}
              alt=""
            />
          </div>
          <div className="flex gap-1 justify-center mt-8">
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />{" "}
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
          </div>
          <p className="text-[20px] mt-3 mb-1 text-center font-jakarta">
            Prickly Pear Tonic
          </p>
          <p className="font-jakarta text-primary text-center">$15.00</p>
        </div>
        <div className="col-span-1">
          <div className="h-[315px]">
            <Image
              src={BgFood5}
              className="h-full w-full object-cover"
              width={315}
              height={315}
              alt=""
            />
          </div>
          <div className="flex gap-1 justify-center mt-8">
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />{" "}
            <Image alt="" src={IcStar} width={16} height={16} />
            <Image alt="" src={IcStar} width={16} height={16} />
          </div>
          <p className="text-[20px] mt-3 mb-1 text-center font-jakarta">
            Crispy Skin Chicken
          </p>
          <p className="font-jakarta text-primary text-center">$33.00</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductSection;
