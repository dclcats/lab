import {IRoute} from "umi";


const routes: IRoute = [
  {
    exact: true,
    path: '/',
    redirect: '/home'
  },
  // {
  //   exact: true,
  //   title: 'SunLab-主页',
  //   path: '/index',
  //   // redirect: '/home',
  //   component: '@/pages/home'
  // },
  {
    title: 'SunLab-主页',
    path: '/home',
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
  },
  { component: '@/pages/404' },
]

console.log('----- routes')
console.log(routes)

export default routes;
