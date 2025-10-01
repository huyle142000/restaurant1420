"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { CalendarIcon } from "lucide-react"; // Hoặc icon bạn dùng
import Image from "next/image";
import { IcClock } from "../../../public/icon";

type Props = {
  control: any;
  name: string;
  className?: string;
};

const CustomInput = forwardRef<HTMLInputElement, any>(
  ({ value, onClick, placeholder, className }, ref) => (
    <div
      onClick={onClick}
      className={cn(
        `flex items-center justify-between w-full cursor-pointer rounded-md border border-input bg-background px-3 py-2 text-sm ${className}`
      )}
    >
      <input
        ref={ref}
        value={value}
        readOnly
        placeholder={placeholder}
        className="bg-transparent outline-none w-full cursor-pointer"
      />
      <Image src={IcClock} width={20} height={20} alt="" />
    </div>
  )
);

CustomInput.displayName = "CustomInput";

const TimePicker = ({ control, name, className }: Props) => {
  const { t } = useTranslation();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          {...field}
          selected={field.value}
          onChange={(time) => field.onChange(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="HH:mm"
          placeholderText={t(`arrival_time_placeholder`)}
          wrapperClassName="w-full"
          customInput={
            <CustomInput
              placeholder={t(`arrival_time_placeholder`)}
              className={className}
            />
          }
        />
      )}
    />
  );
};

export default TimePicker;
