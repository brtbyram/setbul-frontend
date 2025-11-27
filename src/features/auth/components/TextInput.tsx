"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
};

export default function TextInput({ label, id, ...rest }: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      )}
      <input
        id={id}
        {...rest}
        className={`border border-[#e5e5e5] rounded-md h-10 px-2 outline-none mt-1 focus:ring-2 focus:ring-green-600 ${
          rest.className ?? ""
        }`}
      />
    </div>
  );
}
