import { TFunction } from "i18next";
import * as yup from "yup";

export const individualInvoiceSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .max(
        50,
        t("validate.max_length", {
          field: t("request_invoice.name_individual"),
          max: 50,
        })
      )
      .required(t(`full_name_required`))
      .matches(/^[A-Za-zÀ-ỹà-ỹĂăÂâĐđÊêÔôƠơƯư\s]+$/u, t(`full_name_invalid`)),

    phone_number: yup
      .string()
      .required(t(`phone_number_required`))
      .matches(/^\d+$/, t("phone_number_invalid"))
      .min(10, t("phone_number_invalid")),

    email: yup
      .string()
      .trim()
      .required(t(`email_required`))
      .matches(
        /^[A-Za-z0-9]+([._\-+][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$/,
        t("email_invalid")
      ),
  });
};
