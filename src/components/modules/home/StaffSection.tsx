import { initI18n } from "@/lib/i18n-server";
import Image from "next/image";
import React from "react";
import { BgChef } from "../../../../public/background";

type Props = {};

const StaffSection = async (props: Props) => {
  const i18n = await initI18n("vi");
  const t = i18n.getFixedT("vi");

  return (
    <div className="lg:p-48 p-4">
      <p className="text-black text-5xl uppercase font-playfair">
        {t(`our_chef_team`)}
      </p>
      <p className="text-third text-lg mt-3 mb-14">
        Tài năng – Kinh nghiệm – Đam mê Chúng tôi tự hào sở hữu đội ngũ đầu bếp
        chuyên nghiệp, mỗi người đều mang đến một màu sắc ẩm thực riêng biệt. Từ
        kỹ thuật chế biến tinh xảo đến sự sáng tạo trong từng món ăn, họ chính
        là linh hồn làm nên dấu ấn của nhà hàng.
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div>
            <Image
              src={BgChef}
              alt=""
              height={400}
              width={500}
              className="w-full h-full"
            />
          </div>
          <p className="text-2xl uppercase text-second mt-8">Danni Wyatt</p>
          <p className="text-primary text-sm font-bold mt-2">Founder</p>
        </div>
        <div className="col-span-1">
          <div>
            <Image
              src={BgChef}
              alt=""
              height={400}
              width={500}
              className="w-full h-full"
            />
          </div>
          <p className="text-2xl uppercase text-second mt-8">Joe Root</p>
          <p className="text-primary text-sm font-bold mt-2">Finance Manager</p>
        </div>
        <div className="col-span-1">
          <div>
            <Image
              src={BgChef}
              alt=""
              height={400}
              width={500}
              className="w-full h-full"
            />
          </div>
          <p className="text-2xl uppercase text-second mt-8">Herry Brook</p>
          <p className="text-primary text-sm font-bold mt-2">Cook</p>
        </div>
      </div>
    </div>
  );
};

export default StaffSection;
