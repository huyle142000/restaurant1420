"use client";

import React, { useState } from "react";
import ChatbotPopup from "./ChatboxPopup";
import Image from "next/image";
import { IcChatbox } from "../../../../public/icon";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full cursor-pointer text-white shadow-xl hover:bg-orange-700"
      >
        <Image src={IcChatbox} alt="" width={80} height={80} />
      </button>

      {open && <ChatbotPopup onClose={() => setOpen(false)} />}
    </>
  );
}
