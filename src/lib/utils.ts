import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const limitInputLength = (value: string, maxLength: number): string => {
  return value.slice(0, maxLength);
};
