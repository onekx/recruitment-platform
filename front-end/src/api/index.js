import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:5959/api'
})

export default request