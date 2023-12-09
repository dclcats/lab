import {IRoute} from "umi";


const routes: IRoute = [
  {
    exact: true,
    path: '/',
    // redirect: '/home',
    component: '@/pages/home'
  },
  // {
  //   exact: true,
  //   title: 'SunLab-主页',
  //   path: '/index',
  //   // redirect: '/home',
  //   component: '@/pages/home'
  // },
  {
    exact: true,
    title: 'SunLab-主页',
    path: '/',
    component: '@/pages/home'
  },
  {
    title: 'SunLab-人员简介',
    path: '/Members',
    component: '@/pages/members'
  },
  {
    title: 'SunLab-人员简介',
    path: '/Publications',
    component: '@/pages/publications'
  }
]

export default routes;
