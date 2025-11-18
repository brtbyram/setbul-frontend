"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import { logIn } from "../api/auth.api";
import { useRouter } from "next/navigation";

export const AUTH_KEYS = {
  currentUser: ["auth", "currentUser"],
};

// hooks/useAuth.ts
export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  return useMutation({
    mutationFn: logIn,
    onSuccess: (data) => {
      // Backend'den user ve accessToken geliyor
      const user = data.user; // ← user'ı çıkar
      
      setAuth(user); // Zustand'a sadece user bilgisini kaydet
      queryClient.invalidateQueries(AUTH_KEYS.currentUser);

      // Role kontrolü - user.roles kullan
      if (user.roles.includes('admin')) {
        router.push('/admin/dashboard');
      } else if (user.roles.includes('seller')) {
        router.push('/seller/dashboard');
      } else if (user.roles.includes('customer')) {
        router.push('/');
      }
    },
    onError: (error: unknown) => {
      console.error('Login failed:', error);
    }
  });
}

