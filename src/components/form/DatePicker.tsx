"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import DatePickerLib from "react-datepicker";
import { Controller } from "react-hook-form";
import Image from "next/image";
import { IcFormCalendar } from "../../../public/icon";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  control: any;
  name: string;
  minDate?: Date;
  className?: string;
  placeholder?: string;
};

const CustomInput = forwardRef<HTMLInputElement, any>(
  ({ value, onClick, placeholder, className }, ref) => (
    <div className="relative w-full">
      <input
        type="text"
        readOnly
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder={placeholder}
        className={cn(
          `w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm focus:outline-none ${className}`
        )}
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none">
        <Image src={IcFormCalendar} alt="" width={18} height={18} />
      </div>
    </div>
  )
);
CustomInput.displayName = "CustomInput";

const DatePicker = ({
  control,
  name,
  minDate,
  className,
  placeholder = "Chọn ngày đến",
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative w-full">
          <DatePickerLib
            {...field}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText={placeholder}
            minDate={minDate || new Date()}
            wrapperClassName="w-full"
            className={cn(
              "w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm focus:outline-none",
              className
            )}
            customInput={
              <CustomInput className={className} placeholder="Chọn ngày đến" />
            }
            showPopperArrow={false}
            autoComplete="off"
          />
        </div>
      )}
    />
  );
};

export default DatePicker;
