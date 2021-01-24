import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    name: 'short',
    path: '/short',
    alias: '/',
    component: () => import('@views/short.vue'),
  },
  {
    name: 'amv',
    path: '/amv',
    component: () => import('@views/amv.vue'),
  },
  {
    name: 'mv',
    path: '/mv',
    component: () => import('@views/mv.vue'),
  },
  {
    name: 'film',
    path: '/film',
    component: () => import('@views/film.vue'),
  },
  {
    name: 'tv',
    path: '/tv',
    component: () => import('@views/tv.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const initialTitle = document.title;
router.afterEach(({ name }) => {
  document.title = `${name} | ${initialTitle}`;
});
