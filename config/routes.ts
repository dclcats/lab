import { IRoute } from 'umi';

const routes: IRoute = [
  {
    exact: true,
    path: '/',
    redirect: '/home',
  },
  {
    // path: '/',
    component: '@/layouts/index',
    routes: [
      {
        title: 'SunLab-主页',
        path: '/home',
        component: '@/pages/home',
      },
      {
        title: 'SunLab-人员简介',
        path: '/Members',
        component: '@/pages/members',
      },
      {
        title: 'SunLab-Publications',
        path: '/Publications',
        component: '@/pages/publications',
      },
    ],
  },
  { component: '@/pages/404' },
];

export default routes;
