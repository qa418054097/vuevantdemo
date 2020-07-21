import axios from '@/request/http' // 导入http中创建的axios实例

const baseDataApi = {
  /**
   * 获取系统参数
   *
   * */
  GetSysParams() {
    return axios.get('/BaseDataApi/GetSysParams')
  },
  /**
   * fun: 是否注册商家
   * account : 商家账号
   * */
  GetMerchantId(account) {
    return axios.get('/BaseDataApi/GetMerchantId', { params: { account: account }})
  },
  // 商家登录
  CheckPaymentPassword(obj) {
    return axios.post('/BaseDataApi/CheckPaymentPassword', obj)
  }
}
export default baseDataApi

