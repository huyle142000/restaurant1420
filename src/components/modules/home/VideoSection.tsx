import Image from "next/image";
import React from "react";
import { BgLogo, BgVideo } from "../../../../public/background";
import {
  IcListDot,
  IcReserveSingleQuote,
  IcSingleQuote,
} from "../../../../public/icon";

type Props = {};

const VideoSection = (props: Props) => {
  return (
    <div className="relative">
      <Image
        src={BgVideo}
        width={1000}
        height={960}
        alt=""
        className="h-full w-full"
      />
      <div className="absolute w-2/3  left-1/2 -translate-x-1/2 -translate-y-2/3">
        <Image
          src={BgLogo}
          height={200}
          width={1000}
          className="w-full"
          alt=""
        />
        <div className="md:px-28 md:py-24 p-4 bg-white">
          <div className="flex gap-2 justify-center">
            <Image src={IcListDot} alt="" width={10} height={10} />
            <Image src={IcListDot} alt="" width={10} height={10} />
            <Image src={IcListDot} alt="" width={10} height={10} />
          </div>
          <div className="relative mt-6 px-2 md:px-28 ">
            <Image
              src={IcReserveSingleQuote}
              width={80}
              height={150}
              className="absolute top-0 h-10 md:h-fit -left-10 md:-top-1/2 "
              alt=""
            />
            <p className="text-second italic font-playfair text-center py-4 md:pb-12 border-b border-b-[#E1E1E1] ">
              “ Không gian sang trọng, dịch vụ chuẩn 5 sao và món ăn mang đậm
              dấu ấn riêng biệt. Một nơi xứng đáng để tổ chức những buổi tối
              quan trọng. ”
            </p>
            <Image
              src={IcSingleQuote}
              width={80}
              height={150}
              className="absolute bottom-0 h-10 md:h-fit -right-10 md:-bottom-1/2"
              alt=""
            />
          </div>

          <div>
            <p className="text-center text-second text-2xl mt-5 mb-4">
              Mai Anh
            </p>
            <p className="text-center text-primary text-sm uppercase font-bold">
              DOANH NHÂN & lifystyle influencer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
