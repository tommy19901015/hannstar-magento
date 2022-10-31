import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

//export const url = (api: string) => location.origin + '/' + api;

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const AxiosInterceptor = (children: AxiosRequestConfig) => {
  useEffect(() => {

    const resInterceptor = (response:AxiosResponse) => {
      console.log("resInterceptor");
      return response;
    };

    const errInterceptor = (error:AxiosError)=> {
      console.log("errInterceptor");
      if (error.response?.status === 401 || error.response?.status === 403) {
        // 處理error
      }

      return Promise.reject();
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, []);

  return children;
};

export default instance;
export { AxiosInterceptor };