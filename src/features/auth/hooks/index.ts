export * from './useAuth';
export * from './useLogin';
export * from './useLogout';
export * from './useRegister';  

// bu dosya, auth ile ilgili hook'ları tek bir yerden dışa aktarmak için kullanılır 
// böylece diğer dosyalarda import işlemleri daha düzenli olur
// örneğin: import { useLogin, useLogout } from 'src/features/auth/hooks';
