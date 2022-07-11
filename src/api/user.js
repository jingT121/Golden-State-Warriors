// import request from '../utils/axios'

// export function getLogin(data) {
//   return request({
//     url:'/api/login',
//     method: 'post',
//     data: data
//   })
// }

import http from '../utils/http'

export function getLogin(params) {
  return http.post('/api/login', params)
}