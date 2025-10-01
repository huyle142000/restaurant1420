"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IcClose, IcCopy, IcSuccess } from "../../../../public/icon";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Link from "next/link";
type Props = {};

const BookingDetailModal = (props: Props) => {
  const { t } = useTranslation("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenDetailDialog, setIsOpenDetailDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const bookingId = "KBL0912345";

  const handleCopy = async () => {
    toast.success(t(`copied_booking_code`));
    await navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset sau 2s
  };
  return (
    <div>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogContent
          aria-describedby={undefined}
          showCloseButton={false}
          className="w-full max-w-[576px] rounded-2xl  bg-white p-0 mdMax:max-w-[calc(100%-100px)]"
        >
          <DialogTitle className="sr-only">{t("invoice_title")}</DialogTitle>
          <div className="grid gap-6 p-5">
            <div className="flex justify-center">
              <Image height={40} width={40} src={IcSuccess} alt="" />
            </div>
            <p className="font-bold text-black font-tai text-2xl text-center">
              {t(`request_received`)}
            </p>

            <p className="text-black font-tai text-center">
              {t(`request_thank_you`)}
            </p>
            <div className="w-full">
              <Button
                className="uppercase text-sm w-full rounded-lg"
                onClick={() => {
                  setIsOpenDetailDialog(true);
                  setIsOpenDialog(false);
                }}
              >
                {t(`review_request`)}
              </Button>
              <Link href={"/"}>
                <Button
                  variant={"outline"}
                  className="uppercase text-sm mt-2 w-full rounded-lg"
                >
                  {t(`back_to_home`)}
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpenDetailDialog} onOpenChange={setIsOpenDetailDialog}>
        <DialogContent
          aria-describedby={undefined}
          showCloseButton={false}
          className="w-full min-w-3/4 rounded-2xl  bg-white p-0 mdMax:max-w-[calc(100%-100px)]"
        >
          <DialogTitle className="sr-only">{t("invoice_title")}</DialogTitle>

          <div className="flex justify-between w-full  px-10 py-5 bg-primary rounded-tl-2xl rounded-tr-2xl">
            <p className="text-white font-bold text-sm uppercase">
              {t(`booking_info_modal`)}
            </p>
            <Image
              src={IcClose}
              className="cursor-pointer"
              onClick={() => setIsOpenDetailDialog(false)}
              alt=""
              width={16}
              height={16}
            />
          </div>
          <div className="grid px-5">
            <div className="pb-6">
              <p className="text-primary font-bold">{t(`your_booking_code`)}</p>
              <div className="flex gap-1">
                <p className="text-[#070707] font-medium text-sm">ID: </p>
                <p className="text-[#070707] font-medium text-sm">
                  KBL0912345{" "}
                </p>
                <Image
                  alt=""
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  src={IcCopy}
                  onClick={handleCopy}
                />
              </div>
            </div>
            <p className="text-[#21CB7E] font-semibold p-2 bg-[#DAFFED] w-fit rounded-lg text-xs">
              {t(`booking_success`)}
            </p>

            <div className="py-6 border-y border-y-[#D9D9D9]">
              <div className="grid grid-cols-2 gap-14">
                <div className="col-span-1 border-r border-r-[#D9D9D9]">
                  <p className="text-primary font-bold text-[20px] font-inter">
                    {t(`booking_info`)}
                  </p>
                  <div className="mt-6 grid grid-cols-4">
                    <div className="col-span-1 ">
                      <p className="font-inter">{t(`arrival_date`)}</p>
                      <p className="font-inter">{t(`arrival_time`)}</p>
                      <p className="font-inter">{t(`adults`)}</p>
                    </div>
                    <div className="col-span-1 ">
                      <p className="font-inter text-fifth font-bold">
                        07/07/2025
                      </p>
                      <p className="font-inter text-fifth font-bold">10:30</p>
                      <p className="font-inter text-fifth font-bold">2</p>
                    </div>
                    <div className="col-span-1 flex items-end">
                      <p className="font-inter">{t(`children`)}</p>
                    </div>
                    <div className="col-span-1 flex items-end">
                      <p className="font-inter text-fifth font-bold">2</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 ">
                  <p className="text-primary font-bold text-[20px] font-inter">
                    {t(`contact_info`)}
                  </p>
                  <div className="mt-6 grid grid-cols-2">
                    <div className="col-span-1">
                      <p className="font-inter">{t(`contact_name_label`)}</p>
                      <p className="font-inter">{t(`phone_number`)}</p>
                      <p className="font-inter">{t(`email`)}</p>
                    </div>
                    <div className="col-span-1">
                      <p className="font-inter text-fifth font-bold">
                        Ngọc Trương
                      </p>
                      <p className="font-inter text-fifth font-bold">
                        0898216129
                      </p>
                      <p className="font-inter text-fifth font-bold">
                        ntrg.des07@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-b-[#D9D9D9]">
              <p className="text-[20px] font-bold text-primary">{t(`note`)}</p>

              <p className=" mt-3 font-inter font-semibold text-fifth">
                {t(`special_request`)}
              </p>
            </div>
            <div className="py-6 border-b border-b-[#D9D9D9]">
              <p className="text-[20px] font-bold text-primary">
                {t(`invoice_issued`)}
              </p>

              <p className=" mt-3 font-inter font-semibold text-fifth">
                {t(`invoice_requested`)}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingDetailModal;
