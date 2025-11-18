"use client";

import React from "react";
import Link from "next/link";
import { Search, User } from "lucide-react";
import { useAuthStore } from "@/features/auth/store/authStore";


function Header() {


  const { user } = useAuthStore();

  console.log("Current User in Header:", user);

  return (
    <header className="border-b border-neutral-200 sticky z-20 top-0 left-0 right-0 bg-white">
      <div className="flex justify-start items-center container mx-auto ">
        <div className="flex items-center">
          <div className="text-6xl italic font-semibold bg-neutral-100 border-5 scale-60 border-[#308741] rounded-full p-3 text-[#308741] relative flex flex-col items-end space-y-0.5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#256432]">S</div>
            <div className="w-7 h-4 rounded-full border-7 translate-x-1" />
            <div className="w-8 h-4 rounded-full border-7" />
          </div>
          <div className="text-4xl font-semibold text-[#256432]">Setbul</div>
        </div>
        <div className="flex-1 flex justify-start items-center gap-4 ml-8">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button className="relative mr-6 group">
          <Search size={20} className="absolute rounded-2xl bg-white text-black" />
          <input
            type="text"
            placeholder=""
            className="border border-neutral-300 rounded-full px-3 group-focus-within:pl-10 group-focus-within:animate-search-input w-0 group-focus-within:w-64 transition-all duration-300"
          />
        </button>
        <div>
          <Link
            href="/login"
            className="bg-[#0B051D] hover:bg-[#28272E] rounded-full border text-lg border-neutral-400 px-5 py-3 transition-colors duration-300 text-white"
          >
            <User className="inline mb-1 mr-2" size={20} />
            Giriş yap
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
