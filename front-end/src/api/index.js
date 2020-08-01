import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:5959/api',
    timeout: 10000
})

request.interceptors.request.use(
    config => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default request