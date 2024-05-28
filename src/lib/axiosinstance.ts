import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'
const axiosInstance = axios.create({
  baseURL,
  timeout: 20000
})

export default axiosInstance
