import request from '../utils/request';

export const getpersonality = (params) => request({
  url: '/dj/personalize/recommend',
  method: 'get',
  params,
})
