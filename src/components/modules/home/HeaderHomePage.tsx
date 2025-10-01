import Image from "next/image";
import React from "react";
import { IcMail, IcPhone, IcWhiteLocation } from "../../../../public/icon";
import { initI18n } from "@/lib/i18n-server";
import { IcLogoText } from "../../../../public/logo";
import { Button } from "@/components/ui/button";
import { BgMain } from "../../../../public/background";
import Link from "next/link";

// phần import giữ nguyên

const HeaderHomePage = async () => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-primary px-4 md:px-16 flex flex-col md:flex-row  justify-between items-center py-3 gap-y-2">
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <Image alt="" src={IcWhiteLocation} width={16} height={16} />
          <p className="text-white font-bold uppercase">
            Silk St, Barbican, London EC2Y 8DS, UK
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-1">
            <Image alt="" src={IcMail} width={16} height={16} />
            <p className="text-white font-bold uppercase">info@example.com</p>
          </div>
          <div className="flex items-center gap-1">
            <Image alt="" src={IcPhone} width={16} height={16} />
            <p className="text-white font-bold uppercase">+990 887-456-23</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-between items-center gap-4 bg-[#F7F7F7] px-4 md:px-16 py-3 border-b border-b-[#DDDDDD]">
        <div className="flex gap-4 flex-wrap flex-1 text-xs md:text-sm">
          <p className="text-[#292929] uppercase font-bold font-lexend">
            {t(`home`)}
          </p>
          <Link href={"/about-us"}>
            <p className="text-[#292929] uppercase font-bold font-lexend">
              {t(`about_us`)}
            </p>
          </Link>
          <Link href={"/menu"}>
            <p className="text-[#292929] uppercase font-bold font-lexend">
              {t(`menu`)}
            </p>
          </Link>
          <p className="text-[#292929] uppercase font-bold font-lexend">
            {t(`contact`)}
          </p>
        </div>

        <div className="w-[100px] md:w-[150px] flex justify-center">
          <Image src={IcLogoText} alt="" width={220} height={76} />
        </div>

        <div className="flex justify-end flex-1">
          <Link href={"/booking"}>
            <Button className="uppercase text-xs md:text-sm">
              {t(`book_now`)}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#F7F7F7] pb-20 md:pb-28">
        <div className="w-full flex justify-end">
          <Image
            src={BgMain}
            className="w-2/3 md:w-1/2"
            alt=""
            height={573}
            width={946}
          />
        </div>

        <div className="absolute right-0 md:-right-32 top-1/2 -translate-y-1/2 w-full px-4 md:px-0">
          <div className="text-left">
            <p className="text-fifth text-5xl md:text-[160px] font-playfair uppercase leading-none">
              Delicious
            </p>
            <p className="text-fifth text-5xl md:text-[160px] font-playfair uppercase leading-none">
              Food
            </p>
          </div>

          <div className="mt-6 md:mt-12 flex flex-wrap justify-end gap-4 md:gap-10">
            <Link href={"/about-us"}>
              <Button className="uppercase font-jakarta text-xs md:text-sm">
                {t(`about_us`)}
              </Button>
            </Link>
            <Link href={"/menu"}>
              <Button
                variant={"outline"}
                className="uppercase font-jakarta text-xs md:text-sm text-fifth border-[#E0E0E0]"
              >
                {t(`menu`)}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
