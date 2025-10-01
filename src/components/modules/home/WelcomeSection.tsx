import Image from "next/image";
import React from "react";
import {
  BgFood,
  BgFood2,
  BgFood3,
  BgFood4,
  BgFood5,
} from "../../../../public/background";
import { IcListGreyDot, IcWelcome } from "../../../../public/icon";
import { initI18n } from "@/lib/i18n-server";
import { Button } from "@/components/ui/button";

type Props = {};

const menuList = [
  {
    title: "Chicha Morada",
    desc: "Thịt bò nướng, thảo mộc và nước sốt đặc biệt.",
    img: BgFood,
  },
  {
    title: "Tommy’s Margarita",
    desc: "Gà chiên giòn, phô mai, rau tươi",
    img: BgFood2,
  },
  {
    title: "Prickly Pear Tonic",
    desc: "Thăn bò nướng, sốt trái lê, và rau củ",
    img: BgFood3,
  },
  {
    title: "Crispy Skin Chicken",
    desc: "Gà áp chảo da giòn, măng tây và cà rốt",
    img: BgFood4,
  },
  {
    title: "Wild Mushroom Arancini",
    desc: "Thăn bò nướng, nấm và rau củ",
    img: BgFood5,
  },
];

const WelcomeSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <section className="bg-white px-6 py-10 md:px-12 lg:px-32 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left image */}
        <div className="flex justify-center lg:flex-1">
          <Image
            src={BgFood}
            alt="Food"
            width={300}
            height={550}
            className="object-cover"
          />
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center gap-6 text-center lg:w-2/5 px-4 sm:px-8 md:px-14 py-6 lg:py-16">
          <Image src={IcWelcome} width={130} height={22} alt="Welcome" />
          <p className="text-2xl sm:text-3xl md:text-4xl uppercase font-playfair text-second">
            {t("welcome_to_restaurant")}
          </p>
          <Image
            src={IcListGreyDot}
            alt="List dots"
            width={100}
            height={17}
            className="w-full max-w-xs"
          />
          <p className="text-sm sm:text-base md:text-lg text-third font-tai">
            Ra đời vào năm 2012, Nhà hàng Madame Lân là chốn dừng chân của trải
            nghiệm ẩm thực trọn vẹn bên bờ sông Hàn - được mệnh danh là trái tim
            giữa lòng thành phố xinh đẹp Đà Nẵng.
          </p>
          <Button
            className="uppercase font-bold border-pri"
            variant={"outline"}
          >
            {t("view_more")}
          </Button>
        </div>

        {/* Right menu */}
        <div className="grid gap-6 flex-1">
          {menuList.map((item, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 items-center">
              <div className="col-span-1 h-[70px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="col-span-4">
                <p className="text-second text-base md:text-xl font-semibold">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm text-fourth">{item.desc}</p>
                <p className="text-primary font-bold mt-1">$33.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
