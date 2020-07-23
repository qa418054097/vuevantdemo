import axios from '@/request/http' // 导入http中创建的axios实例

const user = {
  login(obj) {
    return axios.post('/vue-app/user/login', obj)
  },
  getInfo(token) {
    return axios.get('/vue-app/user/info', { params: { token }})
  },
  logout() {
    return axios.post('/vue-app/user/logout')
  }
}
export default user
