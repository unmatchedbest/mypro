import { createRouter, createWebHashHistory } from 'vue-router';
// import { Toast } from 'vant';

import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
