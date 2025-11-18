"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "admin" | "seller" | string;

export interface AuthUser {
  id: string;
  email: string;
  fistName?: string;
  lastName?: string;
  phoneNumber?: string; 
  roles: string[];
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;

  // actions
  setAuth: (user: AuthUser) => void;
  clearAuth: () => void;

  // helpers
  hasRole: (role: Role) => boolean;
  isAdmin: boolean;
  isSeller: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      setAuth: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      clearAuth: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      hasRole: (role: Role) => {
        const user = get().user;
        if (!user) return false;
        return user.roles.includes(role);
      },

      get isAdmin() {
        return get().hasRole("admin");
      },

      get isSeller() {
        return get().hasRole("seller");
      },
    }),
    {
      name: "auth-store", // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);