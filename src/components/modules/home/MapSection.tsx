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
      message: "HUY CUte siêu cấp vip pro maxxxxxxxxxxxxxxxx, quá đẹp trai, quá cool ngầu luôn á",
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
