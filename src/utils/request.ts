import axios, { type AxiosError, type AxiosRequestConfig } from 'axios'

const errorCode: { [key: number]: string } = {
  400: '請求錯誤，請檢查您的輸入',
  401: '未登入',
  403: '沒有權限',
  404: '請求錯誤，未找到該資源',
}

const errorAlert = (msg: string) => {
  console.error(msg)
}

const axiosInstance = axios.create({
  baseURL: '/api',
  // 請求超時設定
  timeout: 10000,
  // 跨域請求是否攜帶 cookie
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 發送前header參數
    const token = cookies.get('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.headers['content-type'] === 'application/json') {
      return Promise.resolve(res.data)
    }
    return Promise.resolve(res)
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      errorAlert(errorCode?.[response.status] || '未知錯誤')
    }
    return Promise.reject(error)
  },
)

const baseGet = (url: string, params: AxiosRequestConfig['params'], config: AxiosRequestConfig) => {
  return axiosInstance.get(url, { ...config, params })
}

const basePost = (url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) => {
  return axiosInstance.post(url, data, config)
}

function basePut(url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) {
  return axiosInstance.put(url, data, config)
}

function basePatch(url: string, data?: AxiosRequestConfig['data'], config?: AxiosRequestConfig) {
  return axiosInstance.patch(url, data, config)
}

const baseDel = (url: string, config: AxiosRequestConfig) => {
  return axiosInstance.delete(url, config)
}

export { baseDel, baseGet, basePatch, basePost, basePut, axiosInstance }
