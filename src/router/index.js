import { createRouter, createWebHistory } from 'vue-router';

/** @type {import('vue-router').RouteRecordRaw[]} */
export const routes = [
  {
    name: 'short',
    path: '/short',
    alias: '/',
    component: () => import('@views/short.vue'),
    meta: {
      description: 'My Favorite Short Films',
    },
  },
  {
    name: 'amv',
    path: '/amv',
    component: () => import('@views/amv.vue'),
    meta: {
      description: 'My Favorite AMVs',
    },
  },
  {
    name: 'mv',
    path: '/mv',
    component: () => import('@views/mv.vue'),
    meta: {
      description: 'My Favorite Music Videos',
    },
  },
  {
    name: 'film',
    path: '/film',
    component: () => import('@views/film.vue'),
    meta: {
      description: 'My Favorite Films',
    },
  },
  {
    name: 'tv',
    path: '/tv',
    component: () => import('@views/tv.vue'),
    meta: {
      description: 'My Favorite Series',
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const { currentRoute } = router;
