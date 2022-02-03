import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://cdn.ggumim.co.kr',
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => instance.get<any, AxiosResponse<T>, any>(url).then(responseBody),
};

export default requests;
