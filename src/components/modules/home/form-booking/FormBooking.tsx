"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { formBookingSchema } from "./schema";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/form/DatePicker";
import TimePicker from "@/components/form/TimePicker";
import { ControlledNumberInput } from "@/components/form/ControlledNumberInput";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

type FormData = {
  adults: number;
  children: number;
  date: string;
  time: string;
};

const FormBooking = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formBookingSchema(t)),
  });
  const router = useRouter();
  const onSubmit = (data: FormData) => {
    const query = new URLSearchParams({
      adults: String(data.adults),
      children: String(data.children),
      date: format(data.date, "yyyy-MM-dd"),
      time: format(data.time, "HH:mm"),
    }).toString();

    router.push(`/booking?${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-fifth md:px-28 md:py-14 p-4 text-white space-y-6"
    >
      <p className="uppercase text-5xl font-playfair text-center">
        {t("nav_reservation")}
      </p>

      <p className="text-lg text-[#D2C1AC]">{t("reservation_description")}</p>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 uppercase">
            {t("form_adults")} <span className="text-[#FF0000]">*</span>
          </label>
          <ControlledNumberInput
            control={control}
            name="adults"
            options={Array.from({ length: 1000 }, (_, i) => String(i + 1))}
          />
          {errors.adults && (
            <p className="text-red-500 text-sm">{errors.adults.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 uppercase">
            {t("form_children")} <span className="text-[#FF0000]">*</span>
          </label>
          <ControlledNumberInput
            control={control}
            name="children"
            options={Array.from({ length: 1001 }, (_, i) => String(i))}
          />

          {errors.children && (
            <p className="text-red-500 text-sm">{errors.children.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 uppercase">
            {t("form_date")} <span className="text-[#FF0000]">*</span>
          </label>
          <DatePicker
            control={control}
            name="date"
            className="bg-transparent border-[#2B2B2B] "
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 uppercase">
            {t("form_time")} <span className="text-[#FF0000]">*</span>
          </label>
          <TimePicker
            control={control}
            name="time"
            className="bg-transparent border-[#2B2B2B] "
          />

          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="submit" className="text-sm w-full font-bold uppercase">
          {t("form_submit")}
        </Button>
      </div>
    </form>
  );
};

export default FormBooking;
