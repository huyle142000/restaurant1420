"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  IcFood1,
  IcIngredient,
  IcMushroom,
  IcStar,
  IcWelcome,
} from "../../../../public/icon";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BgFood2,
  BgFood3,
  BgFood4,
  BgFood5,
} from "../../../../public/background";

type Props = {};

const OurMenuSection = (props: Props) => {
  const { t } = useTranslation();
  const [curIndex, setCurIndex] = useState(0);

  return (
    <div className="lg:px-48 px-4 py-28">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
        <div className="hidden lg:block">
          <Image src={IcMushroom} alt="" width={154} height={121} />
        </div>

        <div className="text-center w-full max-w-3xl">
          <div className="flex justify-center mb-5">
            <Image alt="" src={IcWelcome} width={130} height={22} />
          </div>
          <p className="uppercase text-4xl lg:text-5xl font-playfair mb-2">
            {t(`our_menu`)}
          </p>
          <p className="text-base lg:text-lg text-third">
            {t(`quote_love_story`)}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {[t(`all`), t(`breakfast`), t(`Dinner`), t(`lunch`)].map(
              (item, index) => (
                <Button
                  key={index}
                  onClick={() => setCurIndex(index)}
                  variant={"secondary"}
                  style={{
                    boxShadow: "0px 5px 20px 1px #0000000D",
                  }}
                  className={`uppercase ${
                    curIndex === index ? "bg-primary text-white" : ""
                  }`}
                >
                  {item}
                </Button>
              )
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          <Image src={IcIngredient} alt="" width={225} height={204} />
        </div>
      </div>

      {/* Grid món ăn */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {[BgFood2, BgFood3, BgFood4, BgFood5].map((image, i) => (
          <div key={i} className="text-center">
            <Image
              src={image}
              alt=""
              width={308}
              height={308}
              className="mx-auto"
            />
            <div className="mt-8 mb-3 flex justify-center gap-1">
              {[...Array(3)].map((_, j) => (
                <Image key={j} alt="" src={IcStar} width={16} height={16} />
              ))}
            </div>
            <p className="text-lg font-jakarta">Món số {i + 1}</p>
            <p className="text-primary text-sm font-jakarta">$33.00</p>
          </div>
        ))}
      </div>

      {/* Nút đặt bàn */}
      <div className="flex justify-center mt-16">
        <Link href={"/booking"}>
          <Button
            className="border border-[#EEEEEE] uppercase"
            variant={"secondary"}
          >
            {t(`book_now`)}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurMenuSection;
