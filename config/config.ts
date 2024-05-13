import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  // layout: {},
  history: {
    type: 'hash',
  },
  scripts: [
    '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/sun-lab/' : '/',
});
