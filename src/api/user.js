import axios from '@/request/http' // 导入http中创建的axios实例

export function login(obj) {
  return axios.post('/vue-app/user/login', obj)
}

export function getInfo(token) {
  return axios.get('/vue-app/user/info', { params: { token }})
}

export function logout() {
  return axios.post('/vue-app/user/logout')
}
