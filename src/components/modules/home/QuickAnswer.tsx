import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { BgQuickAnswer } from "../../../../public/background";
import { FAQAccordion } from "./FAQAccordion";

type Props = {};

const QuickAnswer = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 py-30 sm:pt-64 px-6 sm:px-12 md:px-20 lg:px-36 xl:px-72 bg-[#F8F8F8]">
      {/* Left */}
      <div className="col-span-1">
        <p className="text-second text-3xl sm:text-4xl lg:text-5xl uppercase font-playfair mb-4">
          {t(`quick_answers`)}
        </p>
        <p className="text-third text-base sm:text-lg mb-6">
          Chúng tôi sẵn sàng giải đáp mọi thông tin... trải nghiệm ẩm thực đặc
          biệt nhất
        </p>
        <FAQAccordion />
      </div>
      <div className="col-span-1">
        {/* Right - Image */}
        <div className="flex items-center justify-center ">
          <Image
            src={BgQuickAnswer}
            alt=""
            width={700}
            height={600}
            className="w-full h-auto max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickAnswer;
