import { AxiosInstance } from 'axios';

export const authInterceptor = (api: AxiosInstance) => {
  api.interceptors.request.use((config) => {
    // Örnek: Token'ı localStorage'dan alıp header'a ekleme
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
};

   