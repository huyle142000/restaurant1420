"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  IcArrowRight,
  IcCheckRequest,
  IcPenEdit,
} from "../../../../public/icon";
import BookingCompanyInvoice from "./BookingCompanyInvoice";
import BookingInvidualInvoice from "./BookingInvidualInvoice";
import { InvoiceTypeEnums } from "@/enum/common.enum";
import { Button } from "@/components/ui/button";
import BookingDetailModal from "./BookingDetailModal";

type Props = {
  detailTicket?: any;
  contactInfo?: any;
  invoiceFormFromAPI?: any;
  setStep?: (value: number) => void;
  step: number;
  isOpenConfirmDialog: boolean;
  setIsOpenConfirmDialog: (value: boolean) => void;
};

const BookingInvoice = ({
  setIsOpenConfirmDialog,
  contactInfo,
  invoiceFormFromAPI,
  setStep,
  step,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  detailTicket,
}: Props) => {
  const { t } = useTranslation("");
  //   const { isAuth } = useAppSelector((state) => state.auth);

  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isEditInvoiceForm, setIsEditInvoiceForm] = useState(false);

  const [invoiceType, setInvoiceType] = useState<InvoiceTypeEnums>(
    InvoiceTypeEnums?.INDIVIDUAL
  );

  const [formType, setFormType] = useState<InvoiceTypeEnums>(
    InvoiceTypeEnums?.INDIVIDUAL
  );

  const [individualForm, setIndividualForm] = useState<{
    name?: string;
    phone_number?: string;
    email?: string;
  } | null>(null);

  const [bussinessForm, setBussinessForm] = useState<{
    name?: string;
    company_address?: string;
    company_tax_code?: string;
    email?: string;
  } | null>(null);

  useEffect(() => {
    if (invoiceFormFromAPI) {
      if (invoiceFormFromAPI?.type == InvoiceTypeEnums.INDIVIDUAL) {
        setIndividualForm({
          name: invoiceFormFromAPI?.name,
          email: invoiceFormFromAPI?.receiver_email,
          phone_number: invoiceFormFromAPI?.phone_number,
        });
      } else {
        setBussinessForm({
          name: invoiceFormFromAPI?.name,
          company_address: invoiceFormFromAPI?.address,
          company_tax_code: invoiceFormFromAPI?.tax_code,
          email: invoiceFormFromAPI?.receiver_email,
        });
      }
      setInvoiceType(invoiceFormFromAPI?.type as InvoiceTypeEnums);
      setFormType(invoiceFormFromAPI?.type as InvoiceTypeEnums);
      setIsEditInvoiceForm(true);
    }
  }, [invoiceFormFromAPI]);

  //   const { mutate: mutatePostGuestOrder, isPending: isPendingPostHaveGuest } =
  //     useGuestFerryTicketOrder((url: string) => {
  //       router.push(url);
  //     });

  //   const { mutate: mutatePostNonGuestOrder, isPending: isPendingPostNonGuest } =
  //     useNonGuestFerryTicketOrder((url: string) => {
  //       router.push(url);
  //     });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpenConfirmDialog(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="grid gap-4 cursor-pointer">
            <div>
              {invoiceType == InvoiceTypeEnums?.BUSSINESS && bussinessForm && (
                <div className="rounded-xl bg-[#FFE2CF] p-2">
                  <div className="cursor-pointer border-b border-[#8F96A3] pb-1">
                    <div className="flex justify-between gap-2">
                      <div className="flex gap-2">
                        <Image
                          height={24}
                          width={24}
                          src={IcCheckRequest}
                          alt=""
                        />
                        <p className="text-base font-medium text-primary">
                          {t(`request_invoice`)}
                        </p>
                      </div>

                      <Image
                        height={24}
                        width={24}
                        src={IcPenEdit}
                        alt=""
                        onClick={() => {
                          setIsOpenDialog(true);
                          setIsEditInvoiceForm(true);
                        }}
                      />
                    </div>
                    <p className="ml-8 text-base font-medium text-[#535353]">
                      ({t(`request_now`)})
                    </p>
                  </div>
                  <div className="p-3">
                    <div className="grid gap-2">
                      <div className="flex gap-2">
                        <p className="text-base font-medium text-[#001142]">
                          {t(`company_name`)}:
                        </p>
                        <p className="text-base text-[#30343B]">
                          {bussinessForm?.name}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <p className="text-base font-medium text-[#001142]">
                          {t(`company_address`)}:
                        </p>
                        <p className="text-base text-[#30343B]">
                          {bussinessForm?.company_address}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <p className="text-base font-medium text-[#001142]">
                          {t(`company_tax_code`)}:
                        </p>
                        <p className="text-base text-[#30343B]">
                          {bussinessForm?.company_tax_code}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <p className="text-base font-medium text-[#001142]">
                          {t(`email`)}:
                        </p>
                        <p
                          className="text-base text-[#30343B]"
                          style={{ wordBreak: "break-word" }}
                        >
                          {bussinessForm?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {invoiceType == InvoiceTypeEnums?.INDIVIDUAL &&
                individualForm && (
                  <div className="rounded-xl bg-[#FFE2CF] p-2">
                    <div className="cursor-pointer border-b border-[#8F96A3] bg-[#FFE2CF] pb-1">
                      <div className="flex justify-between gap-2">
                        <div className="flex gap-2">
                          <Image
                            height={24}
                            width={24}
                            src={IcCheckRequest}
                            alt=""
                          />
                          <p className="text-base font-medium text-primary">
                            {t(`request_invoice`)}
                          </p>
                        </div>

                        <Image
                          height={24}
                          width={24}
                          src={IcPenEdit}
                          alt=""
                          onClick={() => {
                            setIsOpenDialog(true);
                            setIsEditInvoiceForm(true);
                          }}
                        />
                      </div>
                      <p className="ml-8 text-base font-medium text-[#535353]">
                        ({t(`invoice_requested`)})
                      </p>
                    </div>
                    <div className="p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col col-span-1 grid gap-2">
                          <p className="text-base font-medium text-[#001142]">
                            {t(`full_name_label`)}:
                          </p>
                        </div>
                        <div className="col col-span-1 grid gap-2">
                          <p className="text-base text-[#30343B]">
                            {individualForm?.name}
                          </p>
                        </div>
                        <div className="col col-span-1 grid gap-2">
                          <p className="text-base font-medium text-[#001142]">
                            {t(`phone_number`)}:
                          </p>
                        </div>
                        <div className="col col-span-1 grid gap-2">
                          <p className="text-base text-[#30343B]">
                            {individualForm?.phone_number}
                          </p>
                        </div>
                        <div className="col col-span-1 grid gap-2">
                          <p className="text-base font-medium text-[#001142]">
                            {t(`email`)}:
                          </p>
                        </div>
                        <div className="col col-span-1 grid gap-2">
                          <p
                            className="text-base text-[#30343B]"
                            style={{ wordBreak: "break-word" }}
                          >
                            {individualForm?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {(!individualForm &&
                invoiceType == InvoiceTypeEnums?.INDIVIDUAL) ||
              (!bussinessForm && invoiceType == InvoiceTypeEnums?.BUSSINESS) ? (
                <div
                  onClick={() => {
                    setIsOpenDialog(true);
                  }}
                >
                  <div className="mt-6">
                    <div className="bg-[#FFE2CF] p-3 rounded-xl">
                      <div className="flex justify-between">
                        <div className="flex gap-1">
                          <Image
                            src={IcCheckRequest}
                            width={20}
                            height={20}
                            alt=""
                          />
                          <p className="font-medium">{t(`request_invoice`)}</p>
                        </div>
                        <Image
                          src={IcArrowRight}
                          width={24}
                          height={24}
                          alt=""
                        />
                      </div>
                      <p className="font-medium text-[#535353] ml-6">
                        {t(`request_now`)}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 mt-12">
          <div className="w-full">
            <Button variant={"outline"} className="w-full uppercase">
              {t(`back`)}
            </Button>
          </div>
          <div className="w-full">
            <Button className="w-full uppercase">{t(`booking`)}</Button>
          </div>
        </div>
      </form>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogContent
          aria-describedby={undefined}
          className="w-full max-w-[450px] mx-auto rounded-2xl rounded-t-none bg-white px-2 mdMax:max-w-[calc(100%-100px)]"
        >
          <DialogTitle className="sr-only">{t("invoice_title")}</DialogTitle>
          <div className="">
            <div className="">
              <div className="mdMax:p-3">
                <RadioGroup
                  value={formType}
                  onValueChange={(value) =>
                    setFormType(value as InvoiceTypeEnums)
                  }
                  className="mt-5 flex justify-between px-10"
                >
                  <div className="flex items-center space-x-2 py-0.5">
                    <RadioGroupItem
                      className=""
                      value={InvoiceTypeEnums.INDIVIDUAL}
                      id="1"
                    />
                    <Label
                      htmlFor="1"
                      className="text-sm font-medium text-[#30343B]"
                    >
                      {t(`invoice_personal`)}
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 py-0.5">
                    <RadioGroupItem
                      className=""
                      value={InvoiceTypeEnums.BUSSINESS}
                      id="2"
                    />
                    <Label
                      htmlFor="2"
                      className="text-sm font-medium text-[#30343B]"
                    >
                      {t(`invoice_business`)}
                    </Label>
                  </div>
                </RadioGroup>
                <p className="mt-4 px-6 text-base font-semibold text-primary">
                  {t(`invoice_info`)}
                </p>
                {formType == InvoiceTypeEnums.INDIVIDUAL ? (
                  <BookingInvidualInvoice
                    individualForm={individualForm}
                    setIndividualForm={setIndividualForm}
                    setBussinessForm={setBussinessForm}
                    setIsOpenDialog={setIsOpenDialog}
                    setInvoiceType={setInvoiceType}
                    formType={formType}
                    contactInfo={contactInfo}
                    isEditInvoiceForm={isEditInvoiceForm}
                    setIsEditInvoiceForm={setIsEditInvoiceForm}
                  />
                ) : (
                  <BookingCompanyInvoice
                    bussinessForm={bussinessForm}
                    setIndividualForm={setIndividualForm}
                    setBussinessForm={setBussinessForm}
                    setIsOpenDialog={setIsOpenDialog}
                    setInvoiceType={setInvoiceType}
                    formType={formType}
                    contactInfo={contactInfo}
                    isEditInvoiceForm={isEditInvoiceForm}
                    setIsEditInvoiceForm={setIsEditInvoiceForm}
                  />
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <BookingDetailModal />
    </>
  );
};

export default BookingInvoice;
