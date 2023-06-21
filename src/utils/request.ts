import axios from 'axios';

import { MessageService } from '@/utils/message-service';
import { set } from 'lodash';
import router from '@/router';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {
    data: T;
    resultCd: number;
    status: number;
    statusText: string;
    // headers: any;
    // config: AxiosRequestConfig;
    request?: any;
  }
}
const service = axios.create({
  withCredentials: true,
  baseURL: `http://${import.meta.env.VITE_APP_SERVER_API}:${
    import.meta.env.VITE_APP_SERVER_PORT
  }`,
  timeout: 10000
});

let loading: any;
service.interceptors.request.use(
  (config) => {
    // if (sessionStorage.getItem('token')) {
    //  set(config.headers, 'token', sessionStorage.getItem('token'))
    // }
    const reqType = config.method;
    switch (reqType) {
      case 'get':
        if (sessionStorage.getItem('token')) {
          set(config.headers, 'token', sessionStorage.getItem('token'));
        }
        break;
      case 'post':
        if (sessionStorage.getItem('token')) {
          config.data.token = sessionStorage.getItem('token');
        }
        break;
      default:
        break;
    }

    // loading open

    return config;
  },
  (error) => {
    // loading.close();
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // loading.close();

    if (response.data.USER_ID) {
      sessionStorage.setItem(
        'spacesoft-userState',
        JSON.stringify({
          authority: response.data.AUTHORITY,
          user_name: response.data.USER_NM,
          site: response.data.site,
          organ: response.data.organ,
          pos_4: response.data.pos_4
        })
      );
      return response.data;
    }

    const token = sessionStorage.getItem('spacesoft-userState');
    if (token === '' || !token) {
      MessageService.notiError('토큰 불일치 또는 만료');
      router.push(`/login`);
    }

    if (response.status === 500) {
      MessageService.notiError('내부 시스템 오류 관리자에게 문의하세요.');
    }
    if (response.data.resultCd === 300) {
      MessageService.notiError('아이디 및 비밀번호를 확인해 주세요.');
    }

    return response.data;
  },
  (error) => {
    MessageService.notiError(error.message || 'empty error message');
    // loading.close();
    return Promise.reject(error);
  }
);

export default service;
