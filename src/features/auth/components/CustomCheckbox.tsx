"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export function CustomCheckbox({ id }: { id: string }) {

  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center">
      <input id={id} checked={checked} onChange={() => setChecked(!checked)} type="checkbox" className="peer hidden" />
      <label
        htmlFor={id}
        className="h-6 w-6 inline-block border border-neutral-300 rounded-sm relative cursor-pointer ">
        {checked && <Check size={20} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-600" />}
        </label>
    </div>
  );
}

export default CustomCheckbox;