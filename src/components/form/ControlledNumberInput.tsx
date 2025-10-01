import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { IcArrowDown } from "../../../public/icon";
import { cn } from "@/lib/utils";

type ControlledNumberInputProps = {
  name: string;
  control: any;
  options?: string[];
  disabled?: boolean;
  className?: string;
};

export function ControlledNumberInput({
  name,
  control,
  options = ["10", "20", "30", "40"],
  disabled = false,
  className = "p-4,",
}: ControlledNumberInputProps) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const triggerRef = useRef<HTMLDivElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(
    undefined
  );

  useLayoutEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <div ref={triggerRef} className="w-full">
            <PopoverTrigger asChild>
              <div className="relative w-full">
                <Input
                  type="text"
                  value={field.value || ""}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
                    field.onChange(Number(onlyNumbers));
                  }}
                  placeholder={t("combobox_input_placeholder")}
                  disabled={disabled}
                  className={cn(`pr-10 ${className}`)}
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
                  <Image src={IcArrowDown} alt="" height={26} width={12} />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="p-0"
              style={{ width: triggerWidth }}
              align="start"
            >
              <Command>
                <CommandList>
                  {options.map((option) => (
                    <CommandItem
                      key={option}
                      onSelect={() => {
                        field.onChange(Number(option));
                        setOpen(false);
                      }}
                    >
                      {option}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </div>
        </Popover>
      )}
    />
  );
}
