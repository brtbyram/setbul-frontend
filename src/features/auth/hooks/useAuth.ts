"use client";

import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { getCurrentUser } from '../api/auth.api';

export function useAuth() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return useQuery({
    queryKey: ['auth', 'currentUser'],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 dakika
    onSuccess: (data) => {
      if (data) setAuth(data);
    },
    onError: () => {
      clearAuth();
    },
  });
}