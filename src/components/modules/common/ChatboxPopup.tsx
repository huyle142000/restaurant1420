"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import Image from "next/image";
import { IcChatboxFace } from "../../../../public/icon";

type Message = {
  id: number;
  sender: "user" | "bot";
  content: string;
};

export default function ChatbotPopup({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when message updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      content: inputValue.trim(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          content: t("chatbot_default_reply"),
        },
      ]);
    }, 500);
  };

  const handleQuickReply = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      content: text,
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          content: t("chatbot_default_reply"),
        },
      ]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };
  const quickReplies = [
    { key: "chatbot_menu_button", content: t("chatbot_menu_button") },
    { key: "chatbot_booking_button", content: t("chatbot_booking_button") },
    { key: "chatbot_promotion_button", content: t("chatbot_promotion_button") },
    { key: "chatbot_hours_button", content: t("chatbot_hours_button") },
    { key: "chatbot_support_button", content: t("chatbot_support_button") },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[350px] max-h-[500px] rounded-lg border bg-white shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between bg-orange-600 px-4 py-2 text-white rounded-t-lg">
        <div className="flex items-center gap-4">
          <Image src={IcChatboxFace} alt="" width={50} height={30} />
          <p className="font-semibold font-lexend uppercase text-[20px]">
            {t("chatbot_title")}
          </p>
        </div>
        <button onClick={onClose} className="text-white">
          <X size={20} />
        </button>
      </div>
      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50 text-sm">
        {messages?.length == 0 && (
          <div>
            <p className="text-sm font-lexend font-medium">
              {t("chatbot_greeting")}
            </p>
            <p className="text-sm mt-1 font-jakarta font-medium">
              {t("chatbot_intro")}
              <br />
              {t("chatbot_ask")}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              {quickReplies.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleQuickReply(item.content)}
                  className="rounded-full border border-primary px-4 py-1 text-sm text-[#101114] hover:bg-orange-50"
                >
                  {item.content}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[80%] px-3 py-2 rounded-lg ${
              msg.sender === "user"
                ? "ml-auto bg-orange-100 text-right"
                : "mr-auto bg-white border"
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t">
        <input
          type="text"
          placeholder={t("chatbot_input_placeholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}
