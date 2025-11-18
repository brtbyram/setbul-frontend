import { apiService } from '@/lib/api/apiClient';
import { AuthResponse, User } from '@/shared/types/user.types';
import { LoginInput, RegisterInput } from '@/lib/validations/auth.schema';
import { ChangePasswordInput, CheckEmailInput, ForgotPasswordInput, ResetPasswordInput } from '@/lib/schemas/auth';

const AUTH_URL = '/auth';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  phoneNumber?: string;
};

const logIn = async (data: LoginInput): Promise<User> => {
  const response = await apiService.post(`${AUTH_URL}/login`, data);
  return response.data;
};

const register = async (data: RegisterInput): Promise<{ message: string; user: User }> => {
  const response = await apiService.post(`${AUTH_URL}/register`, data);
  return response.data;
};

const logout = async () => {
  const response = await apiService.post(`${AUTH_URL}/logout`);
  return response.data;
};

const forgotPassword = async (data: ForgotPasswordInput) => {
  const response = await apiService.post(`${AUTH_URL}/forgot-password`, data);
  return response.data;
};

const resetPassword = async (data: ResetPasswordInput) => {
  const response = await apiService.post(`${AUTH_URL}/reset-password`, data);
  return response.data;
};

const changePassword = async (data: ChangePasswordInput) => {
  const response = await apiService.post(`${AUTH_URL}/change-password`, data);
  return response.data;
};

const checkEmail = async (data: CheckEmailInput) => {
  const response = await apiService.post(`${AUTH_URL}/check-email`, data);
  return response.data;
};

const getCurrentUser = async () => {
    const response = await apiService.get(`${AUTH_URL}/me`);
    return response.data;
};

export { logIn, register, logout, forgotPassword, resetPassword, changePassword, checkEmail, getCurrentUser };