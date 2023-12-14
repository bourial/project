import Axios, { AxiosRequestConfig } from 'axios';

export const axiosClient = Axios.create({
  baseURL: 'http://192.168.1.94:3500/api/',
});

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  if (config.headers) {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`;
    }
  }
  return config;
};

// @ts-ignore
axiosClient.interceptors.request.use(authRequestInterceptor);

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.data?.message === 'Invalid or expired access token') {
      axiosClient
        .post('/refresh', {
          refreshToken: localStorage.getItem('refresh'),
        })
        .then(res => {
          localStorage.setItem('access', res.data.accessToken);
          window.location.href = '/';
          // axiosClient.request(error.config);
        })
        .catch(err => {
          console.log(err);
        });
    }

    if (error?.response?.data?.message === 'Refresh token is not valid') {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      window.location.href = '/login';
    }
  }
);
