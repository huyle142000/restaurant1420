import { TFunction } from "i18next";
import * as yup from "yup";

export const companyInvoiceSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .required(t(`company_name_required`))
      .matches(
        /^[A-Za-zÀ-ỹà-ỹĂăÂâĐđÊêÔôƠơƯư\s\-]+$/u,
        t(`company_name_invalid`)
      ),

    company_address: yup.string().required(t(`company_address_required`)),
    company_tax_code: yup
      .string()
      .required(t(`tax_code_required`))
      .test("valid-tax-code", t(`tax_code_invalid`), (value) => {
        if (!value) return false;
        const cleaned = value.trim();
        return (
          /^[0-9]{10}$/.test(cleaned) || /^[0-9]{10}-[0-9]{3}$/.test(cleaned)
        );
      }),

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
