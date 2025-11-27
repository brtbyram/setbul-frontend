"use client";

import React, { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id: string;
};

export default function PasswordInput({ label, id, ...rest }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      )}

      <div className="relative mt-1 group">
        <input
          id={id}
          {...rest}
          type={show ? "text" : "password"}
          className={`border border-[#e5e5e5] rounded-md h-10 px-2 pr-10 w-full outline-none focus:ring-2 focus:ring-green-600 ${rest.className ?? ""}`}
        />

        {!show ? (
          <EyeOff onClick={() => setShow(true)} size={18} className="absolute right-3 top-1/2 -translate-y-1/2 group-focus-within:text-green-600 cursor-pointer" />
        ) : (
          <EyeIcon onClick={() => setShow(false)} size={18} className="absolute right-3 top-1/2 -translate-y-1/2 group-focus-within:text-green-600 cursor-pointer" />
        )}
      </div>
    </div>
  );
}