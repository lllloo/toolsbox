import axios from 'axios'

/** @type {HttpErrorCode} */
const errorCode = {
  400: '請求錯誤，請檢查您的輸入',
  401: '未登入',
  403: '沒有權限',
  404: '請求錯誤，未找到該資源',
  500: '伺服器端出錯',
}

const errorAlert = (msg) => {
  console.error(msg)
}

const apiBase = axios.create({
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

apiBase.interceptors.request.use(
  (config) => {
    // 發送前header參數
    const token = cookies.get('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

apiBase.interceptors.response.use(
  (res) => {
    if (res.headers['content-type'] === 'application/json') {
      return Promise.resolve(res.data)
    }
    return Promise.resolve(res)
  },
  (error) => {
    const { response } = error
    if (response) {
      errorAlert(errorCode?.[response.status] || '未知錯誤')
    }
    return Promise.reject(error)
  },
)

/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 */

/**
 * @param {string} url
 * @param {Object} [params]
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const baseGet = (url, params, config) => {
  return apiBase.get(url, { ...config, params })
}

/**
 * @param {string} url
 * @param {Object} data
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const basePost = (url, data, config) => {
  return apiBase.post(url, data, config)
}

function basePut(url, formInfo) {
  return apiBase.put(url, formInfo)
}

function basePatch(url, formInfo) {
  return apiBase.patch(url, formInfo)
}

/**
 * @param {string} url
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const baseDel = (url, config) => {
  return apiBase.delete(url, config)
}

export { baseDel, baseGet, basePatch, basePost, basePut, apiBase }
