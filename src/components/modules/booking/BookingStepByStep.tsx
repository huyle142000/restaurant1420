"use client";
import React, { useState } from "react";
import BookingFormSection from "./BookingFormSection";
import BookingFormConfirmation from "./BookingFormConfirmation";

type Props = {};

const BookingStepByStep = (props: Props) => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step == 0 ? (
        <BookingFormSection setStep={setStep} />
      ) : (
        <BookingFormConfirmation setStep={setStep} step={step} />
      )}
    </div>
  );
};

export default BookingStepByStep;
