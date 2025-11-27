"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "../validations";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Link from "next/link";
import { CustomCheckbox } from "./CustomCheckbox";
import { logIn } from "../api/auth.api";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(data: LoginInput) {
    try {
      await logIn(data);
      redirect("/seller/dashboard");
      console.log("login success");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-sm max-w-96 w-full space-y-4 mt-4">
      <TextInput id="identifier" label="Email" type="email" {...register("identifier")} placeholder="Enter your email" />

      <PasswordInput id="password" label="Password" {...register("password")} placeholder="Enter your password" />

      <div className="flex items-center justify-between">
        <button type="button" className="flex items-center gap-2">
          <CustomCheckbox id="rememberMe" />
          <label htmlFor="rememberMe" className="text-sm text-[#909298] cursor-pointer">Remember Me</label>
        </button>
        <Link href="/forgot-password" className="text-sm text-black">Forgot Password?</Link>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-green-700 text-white rounded-md h-10 mt-2 hover:bg-green-800 transition-colors">
        Sign In
      </button>

      <div className="text-xs text-red-600">
        {errors.identifier && <div>{errors.identifier.message}</div>}
        {errors.password && <div>{errors.password.message}</div>}
      </div>
    </form>
  );
}