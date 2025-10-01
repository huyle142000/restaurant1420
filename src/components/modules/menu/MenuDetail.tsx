import Image from "next/image";
import React from "react";
import { BgMushRoom } from "../../../../public/background";
import { initI18n } from "@/lib/i18n-server";

type Props = {};

const MenuDetail = async () => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");
  return (
    <div className="lg:p-48 p-4">
      <div className="grid grid-cols-2 gap-14">
        <div className="col-span-1">
          <Image src={BgMushRoom} alt="" width={620} height={620} />
        </div>
        <div className="col-span-1 grid gap-6 ">
          <p className="font-playfair text-primary text-5xl">$10.00</p>

          <p className="text-black text-5xl font-playfair">
            Wild Mushroom Arancini
          </p>

          <p className="text-[20px] font-tai">
            Công thức làm món gà nướng đặc biệt thơm ngon và bổ dưỡng cho bữa
            tối Sau đó, thêm sốt mayonnaise vào hỗn hợp trong khi liên tục trộn
            – để sang một bên để sử dụng sau
          </p>

          <div className="flex gap-12">
            <p className="text-black font-bold text-2xl">{t(`category`)}</p>
            <p className="text-[20px] font-tai">Bữa trưa</p>
          </div>

          <div className=" gap-12">
            <p className="text-black font-bold text-2xl mb-4">
              {t(`ingredient`)}
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div className="col-span-1">
                <p className="text-[20px] text-black font-tai">
                  450 gam bột mì đa dụng
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[20px] text-black font-tai">
                  1 thìa canh dầu tinh luyện
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[20px] text-black font-tai">
                  2 củ hành tây lớn
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-[20px] text-black font-tai">
                  300 gam thịt gà luộc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
