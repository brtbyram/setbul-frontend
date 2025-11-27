"use client";

import { EyeIcon, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "@/features/auth/components/LoginForm";
import SocialButtons from "@/features/auth/components/SocialButtons";

export function CustomCheckbox({ id }: { id: string }) {
  return (
    <div className="flex items-center">
      <input type="checkbox" id={id} className="hidden" />
      <label
        htmlFor={id}
        className="h-6 w-6  inline-block border border-neutral-300 rounded-sm relative cursor-pointer before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-600 before:hidden checked:before:block"
      ></label>
    </div>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-[#53546c]">
      <Link href="/" className="mb-6 scale-120 flex font-bold rounded-3xl overflow-hidden text-neutral-50 rounded-bl-none pl-1 pr-3 border-y-neutral-50 border-8 border-green-700 bg-green-800 shadow-md shadow-green-700 -rotate-10 drop-shadow-neutral-200 drop-shadow-2xl">
        <div translate="no" className="rotate-20 italic text-7xl leading-10">
          {" "}
          S
        </div>
        <div translate="no" className="text-7xl leading-10 font-extrabold">
          b
        </div>
      </Link>
      <h1 className="text-3xl font-semibold text-center my-4 text-black">Welcome Back to Setbul</h1>
      <p className="text-sm text-[#909298] text-center">Enter your credentials to access your account.</p>

      <LoginForm />

      <div className="flex items-center w-full max-w-96 my-4">
        <div className="grow border-t border-[#e5e5e5]" />
        <span className="shrink mx-4 text-[#909298] text-sm">Or login with</span>
        <div className="grow border-t border-[#e5e5e5]" />
      </div>

      <SocialButtons />
      
      <div className="mt-4 text-sm text-[#909298]">
        <span>Don&apos;t have an account? </span>
        <Link href="/register" className="text-black">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
