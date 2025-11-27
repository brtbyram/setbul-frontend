"use client";

import { Icon } from "../../../../public/Icons";

export default function SocialButtons() {
  return (
    <div className="flex gap-4 w-full max-w-96 text-sm">
      <button className="flex items-center justify-center gap-x-2 border border-[#e5e5e5] rounded-md p-2 w-full">
        <Icon name="google" size={20} />
        <span>Google</span>
      </button>
      <button className="flex items-center justify-center gap-x-2 border border-[#e5e5e5] rounded-md p-2 w-full">
        <Icon name="apple" size={20} />
        <span>Apple</span>
      </button>
    </div>
  );
}
