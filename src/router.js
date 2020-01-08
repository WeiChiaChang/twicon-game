import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/infinite',
      name: 'infinite',
      component: () => import(/* webpackChunkName: "game-infinite" */ './views/GameInfinite.vue'),
    },
    {
      path: '/timed',
      name: 'timed',
      component: () => import(/* webpackChunkName: "game-timed" */ './views/GameTimed.vue'),
    },
  ],
});
