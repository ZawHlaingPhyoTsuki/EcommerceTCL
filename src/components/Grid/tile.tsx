import Image from "next/image";
import React from "react";
import Label from "./Label";

export default function GridTileImage({
  label,
  alt="",
  ...props
}: {
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
  };
  alt?: string
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="relative group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
      {props.src ? (
        <Image
          className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          alt={alt}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
        />
      ) : null}
    </div>
  );
}
