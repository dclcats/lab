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
        title: 'XDSun-主页',
        path: '/home',
        component: '@/pages/home',
      },
      {
        title: 'XDSun-个人简历',
        path: '/Members',
        component: '@/pages/members',
      },
      {
        title: 'XDSun-Publications',
        path: '/Publications',
        component: '@/pages/publications',
      },
    ],
  },
  { component: '@/pages/404' },
];

export default routes;
