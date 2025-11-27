"use client";

import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-between">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full container mx-auto"
      >
        {children}
      </motion.div>
      <div className="bg-neutral-800 text-white shadow-md h-screen w-10/12 lg:w-full rounded-s-2xl hidden md:flex items-center justify-center">
        slider area
      </div>
    </div>
  );
}
