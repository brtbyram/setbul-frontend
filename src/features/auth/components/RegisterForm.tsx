'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterInput } from '@/lib/validations/auth.schema';
import { useRegister } from '../hooks/useRegister';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function RegisterForm() {
  const router = useRouter();
  const registerMutation = useRegister();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch} = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema)
  });

 // const acceptTerms = watch('acceptTerms');

  const onSubmit = async (data: RegisterInput) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        router.push('/login');
      }
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Satıcı Kaydı</h1>
        <p className="text-gray-600">
          Platformumuza satıcı olarak katılın ve ürünlerinizi satın
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Kullanıcı Bilgileri */}
        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Kullanıcı Bilgileri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Ad Soyad *</Label>
              <Input
                id="firstName"
                {...register('firstName')}
                className={errors.firstName ? 'border-red-500' : ''}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Şifre *</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                className={errors.password ? 'border-red-500' : ''}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

          </div>
        </div>

        {/*username */}
        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Kullanıcı Adı Bilgileri</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="userName">Kullanıcı Adı *</Label>
              <Input
                id="userName"
                placeholder="Örn: herbalife_distributor_ahmet"
                {...register('userName')}
                className={errors.userName ? 'border-red-500' : ''}
              />
              {errors.userName && (
                <p className="text-sm text-red-500 mt-1">{errors.userName.message}</p>
              )}
            </div>
          </div>
        </div>sdf

        {/* role seçimi */}

        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Kullanıcı Rolü</h2>
          
          <div className="space-y-4">
            <div>
              <Label>Kullanıcı Rolü *</Label>
              <div className="flex flex-col mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="coach"
                    onChange={(e) => {
                      const roles = watch('userRole') || [];
                      if (e.target.checked) {
                        setValue('userRole', [...roles, 'coach']);
                      } else {
                        setValue('userRole', roles.filter(r => r !== 'coach'));
                      }
                    }}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Coach</span>
                </label>

                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="admin"
                    onChange={(e) => {
                      const roles = watch('userRole') || [];
                      if (e.target.checked) {
                        setValue('userRole', [...roles, 'admin']);
                      } else {
                        setValue('userRole', roles.filter(r => r !== 'admin'));
                      }
                    }}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Admin</span>
                </label>

                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="user"
                    onChange={(e) => {
                      const roles = watch('userRole') || [];
                      if (e.target.checked) {
                        setValue('userRole', [...roles, 'user']);
                      } else {
                        setValue('userRole', roles.filter(r => r !== 'user'));
                      }
                    }}
                    className="form-checkbox"
                  />
                  <span className="ml-2">User</span>
                </label>
              </div>
              {errors.userRole && (
                <p className="text-sm text-red-500 mt-1">{errors.userRole.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Soyad bilgileri */}
        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold mb-4">Soyad Bilgileri</h2>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="lastName">Soyad *</Label>
              <Input
                id="lastName"
                placeholder="Örn: Herbalife Distribütör Ahmet"
                {...register('lastName')}
                className={errors.lastName ? 'border-red-500' : ''}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
              )}
            </div>

            {/* Phone Number */}

            <div>
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                id="phone"
                placeholder="5551234567"
                {...register('phoneNumber')}
                className={errors.phoneNumber ? 'border-red-500' : ''}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
        </Button>

        {/* Login Link */}
        <div className="text-center text-sm text-gray-600">
          Zaten hesabınız var mı?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Giriş Yap
          </Link>
        </div>
      </form>
    </div>
  );
}
