import { createRouter, createWebHistory } from 'vue-router';
import { resolveDynamicComponent } from 'vue';

export const mainRoutes = [
  {
    name: 'Shorts',
    path: '/short',
    alias: '/',
    component: resolveDynamicComponent(() => import('@views/Shorts.vue')),
  },
  {
    name: 'AMVs',
    path: '/amv',
    component: resolveDynamicComponent(() => import('@views/AMVs.vue')),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: [...mainRoutes],
});
