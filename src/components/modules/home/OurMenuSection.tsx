import Image from "next/image";
import React from "react";
import { IcArrowRight, IcListDot } from "../../../../public/icon";
import { initI18n } from "@/lib/i18n-server";
import {
  BgFood,
  BgFood2,
  BgFood3,
  BgFood4,
  BgFood5,
} from "../../../../public/background";
import { Button } from "@/components/ui/button";

const OurMenuSection = async () => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="bg-sixth px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-16 pb-24 grid gap-8">
      {/* Dấu chấm */}
      <div className="flex justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <Image key={i} src={IcListDot} width={10} height={10} alt="" />
        ))}
      </div>

      {/* Tiêu đề */}
      <p className="text-second text-3xl md:text-4xl font-playfair text-center">
        {t(`our_menu`)}
      </p>

      {/* Mô tả */}
      <p className="text-third text-sm md:text-base lg:text-lg text-center font-tai max-w-5xl mx-auto">
        Trải nghiệm tinh hoa ẩm thực từ những nguyên liệu tươi ngon nhất. Chúng
        tôi tự hào mang đến những món ăn được chế biến tỉ mỉ bởi các đầu bếp tài
        hoa, kết hợp hài hòa giữa hương vị truyền thống và phong cách hiện đại.
      </p>

      {/* Menu List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {[
          { img: BgFood5, name: "Chicha Morada", price: "$33.00" },
          { img: BgFood2, name: "Tommy’s Margarita", price: "$33.00" },
          { img: BgFood3, name: "Prickly Pear Tonic", price: "$33.00" },
          { img: BgFood4, name: "Crispy Skin Chicken", price: "$33.00" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-full aspect-square">
              <Image
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
                width={315}
                height={315}
              />
            </div>
            <p className="text-lg md:text-xl mt-4 mb-1 text-center font-semibold">
              {item.name}
            </p>
            <p className="text-primary text-center">{item.price}</p>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-8">
        <Button
          variant="secondary"
          className="flex items-center gap-2 text-sm md:text-base"
        >
          {t(`view_more`)}
          <Image src={IcArrowRight} height={14} alt="" width={14} />
        </Button>
      </div>
    </div>
  );
};

export default OurMenuSection;
