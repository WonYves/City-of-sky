import { lazy } from 'react';

const routes = [
  {
    path: '*',
    component: lazy(() => import('../view/layout')),   // 重定向
  },
  {
    path: '/login',
    component: lazy(() => import('../view/login')),
  },
  {
    path: '/',
    component: lazy(() => import('../view/layout')),
  },
]

export default routes
