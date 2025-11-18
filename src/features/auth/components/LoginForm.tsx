"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/lib/validations/auth.schema";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export function LoginForm() {

    const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data);
  };
  

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Giriş Yap</h1>
        <p className="text-gray-600">Hesabınıza giriş yapın</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <Label htmlFor="identifier">Email</Label>
          <Input
            id="identifier"
            type="text"
            placeholder="ornek@email.com"
            {...register("identifier")}
            className={errors.identifier ? "border-red-500" : ""}
          />
          {errors.identifier && <p className="text-sm text-red-500 mt-1">{errors.identifier.message}</p>}
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password">Şifre</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={false}>
          {false ? "Giriş yapılıyor..." : "Giriş Yap"}
        </Button>

        {/* Links */}
        <div className="text-center space-y-2">
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline block">
            Şifremi Unuttum
          </Link>
          <div className="text-sm text-gray-600">
            Hesabınız yok mu?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Kayıt Ol
            </Link>
          </div>
        </div>
      </form>

      {/* Test Credentials */}
      <div className="mt-8 p-4 bg-gray-700 rounded-lg text-sm">
        <p className="font-semibold mb-2">Test Hesapları:</p>
        <div className="space-y-1 text-xs">
          <p>
            <strong>Admin:</strong> admin@example.com / admin123
          </p>
          <p>
            <strong>Satıcı:</strong> seller1@example.com / seller123
          </p>
        </div>
      </div>
    </div>
  );
}
