import Header from "@/components/modules/common/Header";
import { Button } from "@/components/ui/button";
import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import Footer from "@/components/modules/common/Footer";
import BackgroundMenuSection from "@/components/modules/menu/BackgroundMenuSection";
import OurMenuSection from "@/components/modules/menu/OurMenuSection";
import { BgOurMenu } from "../../../../public/background";
import { IcDarkCalendar } from "../../../../public/icon";
import MenuDetail from "@/components/modules/menu/MenuDetail";
import RelatedProductSection from "@/components/modules/menu/RelatedProductSection";
import Link from "next/link";

const MenuPage = async () => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");
  return (
    <div>
      <Header />

      <BackgroundMenuSection title="Wild Mushroom Arancini" />
      <MenuDetail />
      <RelatedProductSection />
      <Image
        src={BgOurMenu}
        height={500}
        width={1000}
        className="w-full"
        alt=""
      />
      <div className="bg-primary lg:px-48 px-4 py-8 flex justify-between">
        <p className="text-4xl text-white font-playfair">
          {t(`culinary_excellence_awaits`)}
        </p>
        <Link href={"/booking"}>
          <Button variant={"secondary"} className="flex gap-2 uppercase">
            <Image src={IcDarkCalendar} width={14} height={14} alt="" />
            {t(`book_now`)}
          </Button>
        </Link>
      </div>
      <Footer type="second" />
    </div>
  );
};

export default MenuPage;
