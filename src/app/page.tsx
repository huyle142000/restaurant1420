import HeaderHomePage from "@/components/modules/home/HeaderHomePage";
import FormBooking from "@/components/modules/home/form-booking/FormBooking";
import MapSection from "@/components/modules/home/MapSection";
import OurMenuSection from "@/components/modules/home/OurMenuSection";
import QuickAnswer from "@/components/modules/home/QuickAnswer";
import VideoSection from "@/components/modules/home/VideoSection";
import WelcomeSection from "@/components/modules/home/WelcomeSection";
import { Button } from "@/components/ui/button";
import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import { IcOrangeCalendar } from "../../public/icon";
import StaffSection from "@/components/modules/home/StaffSection";
import CuisineSection from "@/components/modules/home/CuisineSection";
import Footer from "@/components/modules/common/Footer";
import ChatbotButton from "@/components/modules/common/ChatboxButton";
import { useEffect } from "react";
import { logEvent } from "@/lib/ga4";

export default async function Home() {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  useEffect(() => {
    console.log(123123123123)
    logEvent("message_sent", {
      content_length: 1,
      platform: 12321321,
      device: "destop",
      has_conversation: `abcd`,
    });
  }, []);
  return (
    <div>
      <HeaderHomePage />
      <WelcomeSection />
      <OurMenuSection />
      <VideoSection />
      <QuickAnswer />

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7">
          <MapSection />
        </div>
        <div className="col-span-12 md:col-span-5">
          <FormBooking />
        </div>
      </div>

      <StaffSection />

      <div className="bg-second lg:px-48 px-4 py-8 flex justify-between">
        <p className="text-4xl text-white font-playfair">
          {t(`culinary_excellence_awaits`)}
        </p>
        <Button className="flex gap-2 uppercase">
          <Image src={IcOrangeCalendar} width={14} height={14} alt="" />
          {t(`book_now`)}
        </Button>
      </div>
      <ChatbotButton />

      <Footer />
    </div>
  );
}
