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
        exact: true,
        component: lazy(() => import('../view/home')),
      },
    ],
  },
]

export default routes
