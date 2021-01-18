import { createRouter, createWebHistory } from 'vue-router';
import { resolveDynamicComponent } from 'vue';

export const routes = [
  {
    name: 'short',
    path: '/short',
    alias: '/',
    component: resolveDynamicComponent(() => import('@views/short.vue')),
  },
  {
    name: 'amv',
    path: '/amv',
    component: resolveDynamicComponent(() => import('@views/amv.vue')),
  },
  {
    name: 'mv',
    path: '/mv',
    component: resolveDynamicComponent(() => import('@views/mv.vue')),
  },
  {
    name: 'film',
    path: '/film',
    component: resolveDynamicComponent(() => import('@views/film.vue')),
  },
  {
    name: 'tv',
    path: '/tv',
    component: resolveDynamicComponent(() => import('@views/tv.vue')),
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
