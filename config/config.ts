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
  publicPath: process.env.NODE_ENV === 'production' ? '/sun-lab/' : '/',
});
