import { TFunction } from "i18next";
import * as yup from "yup";

export const formBookingSchema = (t: TFunction) => {
  return yup.object({
    adults: yup
      .number()
      .typeError(t(`form_required_adults`))
      .required(t(`form_required_adults`))
      .min(1, t(`form_min_adults`)),
    children: yup
      .number()
      .typeError(t(`form_required_children`))
      .required(t(`form_required_children`))
      .min(0, t(`form_required_children`)),
    date: yup.string().required(t(`form_required_date`)),
    time: yup.string().required(t(`form_required_time`)),
  });
};
