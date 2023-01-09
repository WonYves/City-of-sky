import { lazy } from 'react';

const routes = [
  {
    path: '/login',
    component: lazy(() => import('../view/login')),
  },
  {
    path: '/',
    component: lazy(() => import('../layout')),
    children: [
      {
        // 发现音乐
        path: '/home',
        component: lazy(() => import('../view/home')),
        children: [
          {
            // 个性推荐
            path: '/home/personality',
            component: lazy(() => import('../view/home/personality')),
          },
        ],
      },
      {
        path: '/cc',
        component: lazy(() => import('../view/cc')),
        children: [
          {
            path: '/cc/ttt',
            exact: true,
            component: lazy(() => import('../view/cc/ttt')),
          },
        ],
      },
    ],
  },
]

export default routes
