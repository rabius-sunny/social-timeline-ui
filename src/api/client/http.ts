import axiosInstance from '@/lib/axiosinstance'
import { AxiosResponse } from 'axios'

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string, config?: object) =>
    axiosInstance.get(url, config).then(responseBody),
  post: (url: string, body: object, config?: object) =>
    axiosInstance.post(url, body, config).then(responseBody),
  patch: (url: string, body: object, config?: object) =>
    axiosInstance.patch(url, body, config).then(responseBody),
  delete: (url: string, config?: object) =>
    axiosInstance.delete(url, config).then(responseBody)
}

export default requests
