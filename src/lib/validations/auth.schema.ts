import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, 'identifier gerekli'),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalı')
});


export const RegisterSchema = z.object({
  // Kullanıcı bilgileri
  firstName: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  lastName: z.string().min(2, 'Soyisim en az 2 karakter olmalı'),
  email: z.string().email('Geçerli bir email girin'),
  phoneNumber: z.string().regex(/^[0-9]{10,11}$/, 'Geçerli bir telefon numarası girin (10-11 rakam)'),
  userName: z.string().min(3, 'Kullanıcı adı en az 3 karakter olmalı'),
  password: z.string().min(8, 'Şifre en az 8 karakter olmalı'),
  userRole: z.array(z.enum(['coach', 'admin', 'user'])).min(1, 'En az bir rol seçmelisiniz')
})


export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;