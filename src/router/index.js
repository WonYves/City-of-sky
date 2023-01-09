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
        path: '/home',
        component: lazy(() => import('../view/home')),
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
