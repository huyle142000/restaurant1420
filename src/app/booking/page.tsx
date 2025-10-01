import BackgroundBookingSection from "@/components/modules/booking/BackgroundBookingSection";
import BookingFormSection from "@/components/modules/booking/BookingFormSection";
import Header from "@/components/modules/common/Header";
import Image from "next/image";
import React from "react";
import { BgOurMenu } from "../../../public/background";
import Footer from "@/components/modules/common/Footer";
import BookingStepByStep from "@/components/modules/booking/BookingStepByStep";

type Props = {};

const BookingPage = (props: Props) => {
  return (
    <div>
      <Header />
      <BackgroundBookingSection />
      <BookingStepByStep />
      <Image
        src={BgOurMenu}
        height={500}
        width={1000}
        className="w-full"
        alt=""
      />
      <Footer type="second" />
    </div>
  );
};

export default BookingPage;
