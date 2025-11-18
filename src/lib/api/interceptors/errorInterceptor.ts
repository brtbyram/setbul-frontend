import { AxiosInstance } from 'axios';

export const errorInterceptor = (api: AxiosInstance) => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.warn('Unauthorized, redirecting to login...');
        // örnek: logout() çağır veya router.push('/login')
      }
      return Promise.reject(error);
    }
  );
};