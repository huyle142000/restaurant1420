"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";
import { BookingFormValues } from "@/interfaces/booking.interface";
import { bookingSchema } from "./schema/bookingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "@/components/form/DatePicker";
import TimePicker from "@/components/form/TimePicker";
import { ControlledNumberInput } from "@/components/form/ControlledNumberInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { limitInputLength } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
type Props = {
  setStep: (value: number) => void;
};

const parseValidDate = (value: string | null) => {
  const date = value ? new Date(value) : null;
  return date && !isNaN(date.getTime()) ? date : undefined;
};

function parseTimeToToday(timeStr: string | null): Date | undefined {
  if (!timeStr) return undefined;

  const [hours, minutes] = timeStr.split(":").map(Number);
  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return undefined;
  }

  const now = new Date();
  now.setHours(hours);
  now.setMinutes(minutes);
  now.setSeconds(0);
  now.setMilliseconds(0);

  return now;
}

const BookingFormSection = ({ setStep }: Props) => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const defaultValues = {
    adults: Number(searchParams.get("adults") || 0),
    children: Number(searchParams.get("children") || 0),
    date: parseValidDate(searchParams.get("date")),
    time: parseTimeToToday(searchParams.get("time")),
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema(t)),
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log("Form data:", data);
  };
  return (
    <form
      className="p-4 sm:p-8 lg:p-20 xl:p-48"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center uppercase">
        {t(`nav_reservation`)}
      </p>

      <div className="text-center mt-4 sm:mt-6 font-tai text-sm sm:text-base">
        <Trans
          i18nKey="booking_notice"
          components={{
            bold: <strong className="font-semibold" />,
          }}
        />
      </div>

      <div className="mt-10 sm:mt-16">
        <p className="text-primary font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-roboto">
          {t(`booking_info`)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div>
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("form_date")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <DatePicker
              control={control}
              name="date"
              minDate={new Date()}
              className="bg-transparent border-[#CFD4DA] p-4"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("form_time")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <TimePicker
              control={control}
              name="time"
              className="bg-transparent border-[#CFD4DA] p-4"
            />
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time.message}</p>
            )}
          </div>

          {/* Adults */}
          <div>
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("adults")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <ControlledNumberInput
              control={control}
              name="adults"
              className="p-4"
              options={Array.from({ length: 1000 }, (_, i) => String(i + 1))}
            />
            {errors?.adults && (
              <p className="text-red-500 text-sm">{errors.adults.message}</p>
            )}
          </div>

          {/* Children */}
          <div>
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("children")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <ControlledNumberInput
              control={control}
              name="children"
              className="p-4"
              options={Array.from({ length: 1001 }, (_, i) => String(i))}
            />
            {errors?.children && (
              <p className="text-red-500 text-sm">{errors.children.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-10 sm:mt-16">
        <p className="text-primary font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-roboto">
          {t(`contact_info`)}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact name */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("contact_name")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <Controller
              name="contact_name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  onChange={(e) =>
                    field.onChange(limitInputLength(e.target.value, 50))
                  }
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    e.preventDefault();
                    field.onChange(
                      limitInputLength((field.value || "") + paste, 50)
                    );
                  }}
                  className="p-4"
                  placeholder={t("contact_name_placeholder")}
                />
              )}
            />
            {errors?.contact_name && (
              <p className="text-red-500 text-sm">
                {errors.contact_name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("phone_number")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  onChange={(e) =>
                    field.onChange(
                      limitInputLength(
                        e.target.value.replace(/[^0-9]/g, ""),
                        10
                      )
                    )
                  }
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    e.preventDefault();
                    field.onChange(
                      limitInputLength((field.value || "") + paste, 10)
                    );
                  }}
                  className="p-4"
                  placeholder={t("phone_number_placeholder")}
                />
              )}
            />
            {errors?.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-inter font-semibold text-sm sm:text-base">
              {t("email")} <span className="text-[#FF0000]">(*)</span>
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  onChange={(e) =>
                    field.onChange(limitInputLength(e.target.value, 50))
                  }
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    e.preventDefault();
                    field.onChange(
                      limitInputLength((field.value || "") + paste, 50)
                    );
                  }}
                  className="p-4"
                  placeholder={t("email_placeholder")}
                />
              )}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-10 sm:mt-16">
        <p className="text-primary font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-roboto">
          {t(`note`)}
        </p>
        <div>
          <label className="font-inter font-semibold mb-1 text-sm sm:text-base">
            {t(`special_request`)}
          </label>
          <Controller
            name="note"
            control={control}
            render={({ field }) => (
              <Textarea
                value={field?.value}
                className="max-h-full resize-none overflow-auto border-[#C4C8CF] px-4 py-[10px] pb-12 text-sm text-[#30343B]"
                onChange={(e) =>
                  field?.onChange(limitInputLength(e.target.value, 255))
                }
                onPaste={(e) => {
                  const paste = e.clipboardData.getData("text");
                  e.preventDefault();
                  field?.onChange(
                    limitInputLength((field?.value || "") + paste, 255)
                  );
                }}
                placeholder={t(`note_placeholder`)}
                rows={5}
              />
            )}
          />
          {errors?.note && (
            <p className="text-red-500 text-sm">{errors?.note.message}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center mt-10">
        <Button type="submit" className="w-full  text-sm font-bold uppercase">
          {t("confirmation_title")}
        </Button>
      </div>
    </form>
  );
};

export default BookingFormSection;
