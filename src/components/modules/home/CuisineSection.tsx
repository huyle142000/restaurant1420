import Image from "next/image";
import React from "react";
import { BgFood } from "../../../../public/background";

type Props = {};

const CuisineSection = (props: Props) => {
  return (
    <div className="lg:p-48 p-4 py-32">
      <p className="text-5xl uppercase">Blog - Cảm Hứng Ẩm Thực</p>

      <p className="text-third text-lg mt-2">
        Nơi lưu giữ những câu chuyện, hành trình vị giác và khoảnh khắc đáng nhớ
        tại Madam Lan
      </p>

      <div className="grid grid-cols-3 gap-2 mt-6">
        <div className="col-span-1">
          <div className="h-[420px] ">
            <Image
              src={BgFood}
              height={420}
              width={420}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-primary text-sm font-bold uppercase mt-10">
            Fast Food
          </p>
          <p className="text-3xl mt-3">Hương vị - Nơi bắt đầu của cảm xúc</p>
        </div>
        <div className="col-span-1">
          <div className="h-[420px] ">
            <Image
              src={BgFood}
              height={420}
              width={420}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-primary text-sm font-bold uppercase mt-10">
            Dinner
          </p>
          <p className="text-3xl mt-3">
            Bữa tối không chỉ là để thưởng thức mà để nhớ mãi trong lòng.
          </p>
        </div>
        <div className="col-span-1">
          <div className="h-[420px] ">
            <Image
              src={BgFood}
              height={420}
              width={420}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-primary text-sm font-bold uppercase mt-10">
            Restaurant
          </p>
          <p className="text-3xl mt-3">
            Hạnh phúc đơn giản gói gọn trong một đĩa cơm đậm đà.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CuisineSection;
