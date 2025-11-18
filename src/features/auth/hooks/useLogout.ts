import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import { toast } from "@/shared/hooks/useToast";
import { logout } from "../api/auth.api";

export function useLogout() {
  const queryClient = useQueryClient();
  const { clearAuth } = useAuthStore();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Store'u temizle
      clearAuth();
      
      // localStorage'dan sil
      localStorage.removeItem('token');
      
      // Cache'i temizle
      queryClient.clear();

      toast.success('Çıkış yapıldı');
    }
  });
}