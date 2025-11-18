import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email gerekli')
    .email('Geçerli bir email adresi girin'),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .max(100, 'Şifre en fazla 100 karakter olabilir'),
});

export const SignupSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalı"),
  email: z.string().email("Geçerli bir email gir"),
  password: z.string().min(8, "En az 8 karakter"),
});

export const registerSellerSchema = z.object({
  // User fields
  name: z
    .string()
    .min(2, 'İsim en az 2 karakter olmalı')
    .max(100, 'İsim en fazla 100 karakter olabilir'),
  email: z
    .string()
    .min(1, 'Email gerekli')
    .email('Geçerli bir email adresi girin'),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .max(100, 'Şifre en fazla 100 karakter olabilir')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir'
    ),
  confirmPassword: z.string(),
  
  // Seller fields
  shopName: z
    .string()
    .min(3, 'Mağaza adı en az 3 karakter olmalı')
    .max(100, 'Mağaza adı en fazla 100 karakter olabilir'),
  shopUrl: z
    .string()
    .url('Geçerli bir URL girin')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .regex(/^[0-9]{10,11}$/, 'Geçerli bir telefon numarası girin (10-11 rakam)'),
  address: z.string().max(500).optional(),
  taxNumber: z.string().max(20).optional(),
  description: z.string().max(1000).optional(),
  
  // Terms
  acceptTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Kullanım şartlarını kabul etmelisiniz',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Şifreler eşleşmiyor',
  path: ['confirmPassword'],
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email gerekli')
    .email('Geçerli bir email adresi girin'),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token gerekli'),
  password: z
    .string()
    .min(6, 'Şifre en az 6 karakter olmalı')
    .max(100, 'Şifre en fazla 100 karakter olabilir'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Şifreler eşleşmiyor',
  path: ['confirmPassword'],
});

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(8, "Mevcut şifre en az 8 karakter olmalıdır"),
  newPassword: z.string().min(8, "Yeni şifre en az 8 karakter olmalıdır"),
});

export const CheckEmailSchema = z.object({
  email: z.string().email("Geçerli bir email gir"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof SignupSchema>;
export type RegisterSellerInput = z.infer<typeof registerSellerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof ChangePasswordSchema>;
export type CheckEmailInput = z.infer<typeof CheckEmailSchema>;


