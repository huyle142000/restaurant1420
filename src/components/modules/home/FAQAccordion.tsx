"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export function FAQAccordion() {
  const { t } = useTranslation();

  const items = [
    {
      key: "faq_need_reservation",
      answerKey: "faq_need_reservation_answer",
    },
    {
      key: "faq_special_menu",
      answerKey: "faq_special_menu_answer",
    },
    {
      key: "faq_cancel_policy",
      answerKey: "faq_cancel_policy_answer",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.key} value={item.key}>
          <AccordionTrigger className="text-left font-playfair text-[20px] text-black">
            {t(item.key)}
          </AccordionTrigger>
          <AccordionContent className="text-base font-tai text-muted-foreground">
            {t(item.answerKey)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
