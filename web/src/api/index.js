import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/w3-auth' // Redirect to W3 login
    }
    return Promise.reject(error)
  }
)

export default api
