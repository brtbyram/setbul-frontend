import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth.api";
import { toast } from "@/shared/hooks/useToast";

export function useRegister() {
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data.message || 'Kayıt başarılı! Admin onayı bekleniyor.');
    },
    onError: () => {
      toast.error('Kayıt başarısız');
    }
  });
}