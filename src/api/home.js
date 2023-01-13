import request from '../utils/request';

//
export const getpersonality = (params) => request({
  url: '/dj/personalize/recommend',
  method: 'get',
  params,
})

// 轮播图
export const getbanner = (params) => request({
  url: '/banner',
  method: 'get',
  params,
})

// 推荐歌单
export const personalized = (params) => request({
  url: '/personalized',
  method: 'get',
  params,
})
