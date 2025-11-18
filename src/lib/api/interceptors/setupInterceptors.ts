import { AxiosInstance } from 'axios';
import { authInterceptor } from './authInterceptor';
import { errorInterceptor } from './errorInterceptor';
import { refreshInterceptor } from './refreshInterceptor';




export const setupInterceptors = (api: AxiosInstance) => {
  authInterceptor(api);
  errorInterceptor(api);

};