"use client";
import { logEvent } from "@/lib/ga4";
import React, { useEffect } from "react";

type Props = {};

const MapSection = (props: Props) => {
  useEffect(() => {
    console.log(123123123123);
    logEvent("message_sent", {
      content_length: 1,
      platform: 12321321,
      device: "destop",
      has_conversation: `abcd`,
      message:
        "HUY CUte siêu cấp vip pro maxxxxxxxxxxxxxxxx, quá đẹp trai, quá cool ngầu luôn á, cưng dễ thương vcl, yêu anh 3000, anh iu em nhất quả đất luôn á, anh là nhất, anh là số 1, anh là duy nhất, anh là tất cả đối với em, em yêu anh nhiều lắm luôn á, yêu anh nhất quả đất luôn á, yêu anh nhiều hơn cả yêu bản thân mình luôn á, yêu anh nhiều hơn cả yêu cuộc sống này luôn á, yêu anh nhiều hơn cả yêu gia đình mình luôn á, yêu anh nhiều hơn cả chính bản thân mình luôn á, yêu anh nhiều hơn cả tất cả mọi thứ trên đời này luôn á, yêu anh nhiều hơn cả tất cả mọi người trên thế giới này luôn á, yêu anh nhiều hơn cả tất cả mọi vũ trụ này luôn á, yêu anh nhiều hơn cả tất cả mọi thiên hà này luôn á, yêu anh nhiều hơn cả tất cả mọi hành tinh này luôn á, yêu anh nhiều hơn cả tất cả mọi ngôi sao này luôn á, yêu anh nhiều hơn cả tất cả mọi ánh sáng này luôn á, yêu anh nhiều hơn cả tất cả mọi bóng tối này luôn á, yêu anh nhiều hơn cả tất cả mọi giấc mơ này luôn á, yêu anh nhiều hơn cả tất cả mọi hy vọng này luôn á, yêu anh nhiều hơn cả tất cả mọi niềm tin này luôn á, yêu anh nhiều hơn cả tất cả mọi tình yêu này luôn á, yêu anh nhiều hơn cả tất cả mọi cảm xúc này luôn á, yêu anh nhiều hơn cả tất cả mọi suy nghĩ này luôn á, yêu anh nhiều hơn cả tất cả mọi ký ức này luôn á, yêu anh nhiều hơn cả tất cả mọi khoảnh khắc này luôn á, yêu anh nhiều hơn cả tất cả mọi thời gian này luôn á, yêu anh nhiều hơn cả tất cả mọi không gian này luôn á, yêu anh nhiều hơn cả tất cả mọi vạn vật này luôn á, yêu anh nhiều hơn cả tất cả mọi sinh vật này luôn á, yêu anh nhiều hơn cả tất cả mọi con người này luôn á, yêu anh nhiều hơn cả tất cả mọi loài vật này luôn á, yêu anh nhiều hơn cá",
      debug_mode: true,
    });
  }, []);
  return (
    <div className="h-full">
      <iframe
        src="https://www.google.com/maps?q=20.929306,106.987463&z=13&t=k&output=embed"
        className="h-full w-full"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default MapSection;
