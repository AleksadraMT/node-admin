import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About'),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/Work/Work'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts/Contacts'),
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
