import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InvoiceTypeEnums } from "@/enum/common.enum";
import { individualInvoiceSchema } from "./schema/invidualInvoiceSchema";
import { IBookingInvidualInvoice } from "@/interfaces/booking.interface";
import { Label } from "@/components/ui/label";
import { limitInputLength } from "@/lib/utils";

type Props = {
  individualForm: any;
  setIndividualForm: (value: any) => void;
  setBussinessForm: (value: any) => void;
  setIsOpenDialog: (value: boolean) => void;
  setInvoiceType: (value: InvoiceTypeEnums) => void;
  formType: InvoiceTypeEnums;
  contactInfo?: IBookingInvidualInvoice;
  isEditInvoiceForm: boolean;
  setIsEditInvoiceForm: (value: boolean) => void;
};

const BookingInvidualInvoice = ({
  individualForm,
  setIndividualForm,
  setIsOpenDialog,
  setInvoiceType,
  formType,
  contactInfo,
  isEditInvoiceForm,
  setIsEditInvoiceForm,
  setBussinessForm,
}: Props) => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("product");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(individualInvoiceSchema(t)),
    mode: "onChange",
  });

  const onSubmit = (values: any) => {
    setIndividualForm(values);
    setIsOpenDialog(false);
    setInvoiceType(formType as InvoiceTypeEnums);
  };

  useEffect(() => {
    if (individualForm) {
      reset(individualForm);
    } else {
      reset({
        email: contactInfo?.email,
        name: contactInfo?.name,
        phone_number: contactInfo?.phone_number,
      });
    }
  }, [individualForm, reset]);

  return (
    <form
      className="grid h-fit gap-4  rounded-b-3xl bg-white p-4 px-0"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <div className="grid grid-cols-1 gap-4 overflow-y-auto overflow-x-hidden  max-h-[70vh] px-6">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div>
              <Label className="mb-1 text-sm font-medium text-[#001142]">
                {t(`full_name_label`)}
                <span className="text-[#FF3434]">*</span>
              </Label>
              <div className="relative">
                <Input
                  value={field?.value}
                  className="border-[#C4C8CF] p-4 rounded-2xl text-[#30343B]"
                  onChange={(e) => {
                    const newValue = limitInputLength(e.target.value, 50);
                    field?.onChange(newValue);
                  }}
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    const newValue = limitInputLength(
                      (field?.value || "") + paste,
                      50
                    );
                    e.preventDefault();
                    field?.onChange(newValue);
                  }}
                  placeholder={tCommon(`full_name_placeholder`)}
                />
              </div>
              {errors?.name && errors?.name?.message && (
                <p className="text-sm italic text-[#FF3434]">
                  * {errors?.name?.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="phone_number"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-1 text-sm font-medium text-[#001142]">
                {tCommon(`phone_number`)}{" "}
                <span className="text-[#FF3434]">*</span>
              </p>
              <div className="relative">
                <Input
                  type="text"
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                    const newValue = limitInputLength(onlyNumbers, 10);
                    field?.onChange(newValue);
                  }}
                  value={field?.value}
                  className="border-[#C4C8CF] p-4 rounded-2xl text-[#30343B] [appearance:textfield]"
                  placeholder={tCommon(`phone_number_placeholder`)}
                />
              </div>
              {errors?.phone_number && errors?.phone_number?.message && (
                <p className="text-sm italic text-[#FF3434]">
                  * {errors?.phone_number?.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-1 text-sm font-medium text-[#001142]">
                {tCommon(`email`)} <span className="text-[#FF3434]">*</span>
              </p>
              <div className="relative">
                <Input
                  type="email"
                  value={field?.value}
                  className="border-[#C4C8CF] p-4 rounded-2xl text-[#30343B]"
                  onChange={(e) => {
                    const newValue = limitInputLength(e.target.value, 50);
                    field?.onChange(newValue);
                  }}
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    const newValue = limitInputLength(
                      (field?.value || "") + paste,
                      50
                    );
                    e.preventDefault();
                    field?.onChange(newValue);
                  }}
                  placeholder={tCommon(`email_placeholder`)}
                />
              </div>
              {errors?.email && errors?.email?.message && (
                <p className="text-sm italic text-[#FF3434]">
                  * {errors?.email?.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="grid gap-4 rounded-xl bg-[#FFF7E5] p-4">
          <div className="grid gap-2">
            <p className="text-sm font-medium text-[#001142]">
              {tCommon(`note`)}
            </p>

            <p className="text-sm text-[#30343B]">
              {tCommon(`invoice_notice`)}
            </p>
          </div>

          <div className="grid gap-2">
            <p className="text-sm font-medium text-[#001142]">
              {tCommon(`disclaimer`)}
            </p>

            <p className="text-sm text-[#30343B]">
              {tCommon(`invoice_policy_note`)}
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-4 w-full">
            {individualForm && (
              <div className="w-full">
                <Button
                  className="h-fit w-full bg-transparent hover:bg-transparent border hover:opacity-80 border-red-500 text-red-500 rounded-lg px-5 py-4 text-lg font-medium"
                  onClick={() => {
                    setIndividualForm(null);
                    setIsOpenDialog(false);
                    setBussinessForm(null);
                    setIsEditInvoiceForm(false);
                  }}
                >
                  {tCommon(`cancel_request`)}
                </Button>
              </div>
            )}
            <div className="w-full">
              <Button
                type="submit"
                className={`h-fit  ${
                  individualForm ? "w-full" : "w-full"
                } bg-primary rounded-lg px-5 py-4 text-lg font-medium text-white`}
              >
                {isEditInvoiceForm
                  ? tCommon(`update`)
                  : tCommon(`submit_request`)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingInvidualInvoice;
