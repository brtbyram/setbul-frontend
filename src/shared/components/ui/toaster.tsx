"use client";

import { useToast } from "@/shared/hooks/useToast";
import { CheckCircle, XCircle, Info } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg
            animate-in slide-in-from-right duration-300
            ${
              toast.type === "success"
                ? "bg-green-50 text-green-900 border border-green-200"
                : toast.type === "error"
                ? "bg-red-50 text-red-900 border border-red-200"
                : "bg-blue-50 text-blue-900 border border-blue-200"
            }
          `}
        >
          {toast.type === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
          {toast.type === "error" && <XCircle className="w-5 h-5 text-red-600" />}
          {toast.type === "info" && <Info className="w-5 h-5 text-blue-600" />}
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
