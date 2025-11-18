"use client";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/auth.api";
import { useAuthStore } from "../store/authStore";

export const AUTH_KEYS = {
  currentUser: ["auth", "currentUser"],
};


export function useCurrentUserQuery() {
  return useQuery({
    queryKey: AUTH_KEYS.currentUser,
    queryFn: getCurrentUser,
    onSuccess: (data) => {
      const setAuth = useAuthStore.getState().setAuth;
      if (data) setAuth(data);
    },
    onError: () => {
      const clearAuth = useAuthStore.getState().clearAuth;
      clearAuth();
    },
    retry: false, // 401 olunca axios zaten refresh edecek
  });
}