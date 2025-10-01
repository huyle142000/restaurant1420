export interface BookingFormValues {
  date: Date;
  time: Date;

  adults: number;
  children?: number;

  contact_name: string;
  phone_number: string;
  email: string;

  note?: string;
}

export interface IBookingInvidualInvoice {
  name: string;
  phone_number: string;
  email: string;
}

export interface IBookingInvidualInvoice {
  name: string;
  phone_number: string;
  email: string;
}

export interface IBookingCompanyInvoice {
  name: string;
  email: string;
  tax_code: string;
  address: string;
}
