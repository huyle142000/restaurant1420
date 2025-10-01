import { z } from "zod";
import { TFunction } from "i18next";
import { addHours, isAfter, isSameDay } from "date-fns";

export const createBookingSchema = (t: TFunction) => {
  return z
    .object({
      date: z.date({
        error: t("arrival_date_required"),
      }),

      time: z.date({
        error: t("arrival_time_required"),
      }),

      adults: z
        .number({
          error: t("adults_required"),
        })
        .min(1, { message: t("adults_min") })
        .max(1000, { message: t("adults_max") }),

      children: z
        .number({
          error: t("children_invalid"),
        })
        .min(0, { message: t("children_invalid") })
        .max(1000, { message: t("children_max") })
        .optional(),

      contact_name: z
        .string({
          error: t("contact_name_required"),
        })
        .trim()
        .max(50, { message: t("contact_name_max") })
        .regex(/^[a-zA-ZÀ-ỹ\s]+$/, t("contact_name_invalid")),

      phone_number: z
        .string({
          error: t("phone_number_required"),
        })
        .regex(/^\d{10}$/, t("phone_number_invalid")),

      email: z
        .string({
          error: t("email_required"),
        })
        .max(50, { message: t("email_max") })
        .email(t("email_invalid"))
        .regex(
          /^[A-Za-z0-9]+([._\-+][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$/,
          t("email_invalid")
        ),

      note: z
        .string()
        .max(255, { message: t("note_max") })
        .optional(),
    })
    .refine(
      (data) => {
        if (!data.date || !data.time) return false;

        const now = new Date();
        const oneHourLater = addHours(now, 1);

        if (isSameDay(data.date, now)) {
          return isAfter(data.time, oneHourLater);
        }

        return true;
      },
      {
        message: t("arrival_time_minimum_1_hour"), // key dịch, ví dụ: "Thời gian phải cách hiện tại ít nhất 1 tiếng"
        path: ["time"],
      }
    );
};

export const bookingSchema = createBookingSchema;
export type BookingFormValues = z.infer<ReturnType<typeof bookingSchema>>;
