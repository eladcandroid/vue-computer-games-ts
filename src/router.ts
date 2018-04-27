import Vue from 'vue';
import Router from 'vue-router';

import AddGame from '@/views/AddGame.vue';
import GamesList from '@/views/GamesList.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: GamesList },
  { path: '/add', component: AddGame },
];

export default new Router({
  routes,
});
