import BackgroundSection from "@/components/modules/about-us/BackgroundSection";
import WelcomeToRestaurantSection from "@/components/modules/about-us/WelcomeToRestaurantSection";
import WhyChooseUsSection from "@/components/modules/about-us/WhyChooseUsSection";
import Header from "@/components/modules/common/Header";
import { Button } from "@/components/ui/button";
import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { IcDarkCalendar } from "../../../public/icon";
import DesertAndFoodSection from "@/components/modules/about-us/DesertAndFoodSection";
import Footer from "@/components/modules/common/Footer";
import Link from "next/link";

const AboutUsPage = async () => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");
  return (
    <div>
      <Header />

      <BackgroundSection />
      <WelcomeToRestaurantSection />
      <WhyChooseUsSection />

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
      <DesertAndFoodSection />

      <Footer type="second" />
    </div>
  );
};

export default AboutUsPage;
