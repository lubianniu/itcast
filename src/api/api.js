import axios from 'axios'
// 基准路径标准设置
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}
