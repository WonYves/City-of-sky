import request from '../utils/request';


// 搜索
export const getSerach = (params) => request({
  url: '/cloudsearch',
  method: 'get',
  params,
})
