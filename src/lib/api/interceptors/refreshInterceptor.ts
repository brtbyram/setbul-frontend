import { AxiosInstance } from 'axios';
import { apiService } from '../apiClient';

let isRefreshing = false;
let failedQueue: any[] = [];

export const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const refreshInterceptor = (api: AxiosInstance) => {

    console.log("🔧 Refresh interceptor kuruldu!");
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Eğer access token expired (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Refresh işlemi zaten devam ediyorsa talepleri kuyruğa atıyoruz
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => apiService(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // 🔥 Refresh endpoint — cookie otomatik gönderiliyor
        await apiService.post("/auth/refresh");

        processQueue(null, null);
        return apiService(originalRequest);
      } catch (refreshErr) {
        processQueue(refreshErr, null);
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
};