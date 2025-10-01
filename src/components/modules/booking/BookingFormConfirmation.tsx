"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { IcArrowRight, IcCheckRequest } from "../../../../public/icon";
import BookingInvoice from "./BookingInvoice";

type Props = {
  step: number;
  setStep: (step: number) => void;
};

const BookingFormConfirmation = ({ step, setStep }: Props) => {
  const { t } = useTranslation();
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false);

  return (
    <div className="p-4 sm:p-8 lg:p-20 xl:p-48">
      <p className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center uppercase">
        {t(`confirmation_title`)}
      </p>

      <div className="text-center mt-4 sm:mt-6 font-tai text-sm sm:text-base">
        <Trans
          i18nKey="booking_notice"
          components={{
            bold: <strong className="font-semibold" />,
          }}
        />
      </div>

      <div className="mt-10 sm:mt-12">
        {/* Thông tin đặt bàn */}
        <div className="py-6 border-y border-[#D9D9D9]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            {/* Booking Info */}
            <div className="border-b md:border-b-0 md:border-r border-[#D9D9D9] pb-6 md:pb-0 pr-0 md:pr-6">
              <p className="text-primary font-bold text-lg sm:text-xl font-inter">
                {t(`booking_info`)}
              </p>
              <div className="mt-4 grid grid-cols-4 gap-2 text-sm sm:text-base">
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-inter">{t(`arrival_date`)}</p>
                  <p className="font-inter">{t(`arrival_time`)}</p>
                  <p className="font-inter">{t(`adults`)}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-inter text-fifth font-bold">07/07/2025</p>
                  <p className="font-inter text-fifth font-bold">10:30</p>
                  <p className="font-inter text-fifth font-bold">2</p>
                </div>
                <div className="col-span-2 sm:col-span-1 flex sm:block items-end">
                  <p className="font-inter">{t(`children`)}</p>
                </div>
                <div className="col-span-2 sm:col-span-1 flex sm:block items-end">
                  <p className="font-inter text-fifth font-bold">2</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-primary font-bold text-lg sm:text-xl font-inter">
                {t(`contact_info`)}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:text-base">
                <div>
                  <p className="font-inter">{t(`contact_name_label`)}</p>
                  <p className="font-inter">{t(`phone_number`)}</p>
                  <p className="font-inter">{t(`email`)}</p>
                </div>
                <div>
                  <p className="font-inter text-fifth font-bold">Ngọc Trương</p>
                  <p className="font-inter text-fifth font-bold">0898216129</p>
                  <p className="font-inter text-fifth font-bold">
                    ntrg.des07@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ghi chú */}
        <div className="py-6 border-b border-[#D9D9D9]">
          <p className="text-lg sm:text-xl font-bold text-primary">
            {t(`note`)}
          </p>
          <p className="mt-3 font-inter font-semibold text-fifth text-sm sm:text-base">
            {t(`special_request`)}
          </p>
        </div>

        {/* Hóa đơn */}
        <BookingInvoice
          step={step}
          isOpenConfirmDialog={isOpenConfirmDialog}
          setIsOpenConfirmDialog={setIsOpenConfirmDialog}
          setStep={setStep}
        />
      </div>
    </div>
  );
};

export default BookingFormConfirmation;
