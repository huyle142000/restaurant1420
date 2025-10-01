import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InvoiceTypeEnums } from "@/enum/common.enum";
import { IBookingCompanyInvoice } from "@/interfaces/booking.interface";
import { companyInvoiceSchema } from "./schema/companyInvoiceSchema";
import { limitInputLength } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  bussinessForm: any;
  setBussinessForm: (value: any) => void;
  setIsOpenDialog: (value: boolean) => void;
  setInvoiceType: (value: InvoiceTypeEnums) => void;
  setIndividualForm: (value: any) => void;
  formType: InvoiceTypeEnums;
  contactInfo?: IBookingCompanyInvoice;
  isEditInvoiceForm: boolean;
  setIsEditInvoiceForm: (value: boolean) => void;
};

const BookingCompanyInvoice = ({
  bussinessForm,
  setBussinessForm,
  setIsOpenDialog,
  setInvoiceType,
  formType,
  contactInfo,
  isEditInvoiceForm,
  setIsEditInvoiceForm,
  setIndividualForm,
}: Props) => {
  const { t: tCommon } = useTranslation("");

  const {
    control,
    handleSubmit,
    // watch,
    // setValue,
    // getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(companyInvoiceSchema(tCommon)),
    mode: "onChange",
  });

  useEffect(() => {
    if (bussinessForm) {
      reset(bussinessForm);
    } else {
      reset({
        email: contactInfo?.email,
      });
    }
  }, [bussinessForm, reset]);

  const onSubmit = (values: any) => {
    setBussinessForm(values);
    setIsOpenDialog(false);
    setInvoiceType(formType);
  };
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
      <div className="grid gap-4 px-6  overflow-y-auto max-h-[70vh]">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-1 text-sm font-medium text-[#001142]">
                {tCommon(`company_name`)}
                <span className="text-[#FF3434]"> *</span>
              </p>
              <div className="relative">
                <Input
                  value={field?.value}
                  className="border-[#C4C8CF] p-4 rounded-2xl text-sm text-[#30343B]"
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
                  placeholder={tCommon(`company_name_placeholder`)}
                />
                {/* <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <p className="text-sm text-[#5E6573]">
                    {field?.value?.length ?? 0}/250
                  </p>
                </div> */}
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
          name="company_address"
          control={control}
          render={({ field }) => (
            <div className="">
              <p className="mb-1 text-sm font-medium text-[#001142]">
                {tCommon(`company_address`)}{" "}
                <span className="text-[#FF3434]">*</span>
              </p>
              <div className="relative overflow-hidden">
                {/* <Input
                  value={field?.value}
                  className="border-[#C4C8CF] p-4 rounded-2xl text-sm text-[#30343B]"
                  onChange={field?.onChange}
                  placeholder={tCommon(`company_address_placeholder`)}
                /> */}
                <Textarea
                  value={field?.value}
                  className="max-h-20 max-w-full break-words break-all resize-none rounded-2xl overflow-auto border-[#C4C8CF] px-4 py-[10px]  text-sm text-[#30343B]" // tăng padding-bottom
                  onChange={(e) => {
                    const newValue = limitInputLength(e.target.value, 255);
                    field?.onChange(newValue);
                  }}
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    const newValue = limitInputLength(
                      (field?.value || "") + paste,
                      255
                    );
                    e.preventDefault();
                    field?.onChange(newValue);
                  }}
                  placeholder={tCommon(`note_placeholder`)}
                  rows={1}
                />
              </div>
              {errors?.company_address && errors?.company_address?.message && (
                <p className="text-sm italic text-[#FF3434]">
                  * {errors?.company_address?.message}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="company_tax_code"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-1 text-sm font-medium text-[#001142]">
                {tCommon(`company_tax_code`)}{" "}
                <span className="text-[#FF3434]">*</span>
              </p>
              <div className="relative">
                <Input
                  value={field?.value}
                  className="border-[#C4C8CF] p-4 rounded-2xl text-sm text-[#30343B]"
                  placeholder={tCommon(`company_tax_code_placeholder`)}
                  onChange={(e) => {
                    const onlyNumbersAndDash = e.target.value.replace(
                      /[^0-9-]/g,
                      ""
                    );
                    const newValue = limitInputLength(onlyNumbersAndDash, 14);
                    field?.onChange(newValue);
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const paste = e.clipboardData.getData("text");
                    const cleaned = paste.replace(/[^0-9-]/g, "");
                    const combined = (field?.value || "") + cleaned;
                    const newValue = limitInputLength(combined, 14);
                    field?.onChange(newValue);
                  }}
                />
              </div>
              {errors?.company_tax_code &&
                errors?.company_tax_code?.message && (
                  <p className="text-sm italic text-[#FF3434]">
                    * {errors?.company_tax_code?.message}
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
                  className="border-[#C4C8CF] p-4 rounded-2xl text-sm text-[#30343B]"
                  onChange={field?.onChange}
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
        <div className="flex items-center gap-4">
          {isEditInvoiceForm && (
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
              className={`h-fit w-full bg-primary rounded-lg px-5 py-4 text-lg font-medium text-white`}
            >
              {isEditInvoiceForm
                ? tCommon(`update`)
                : tCommon(`submit_request`)}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookingCompanyInvoice;
