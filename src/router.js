import Vue from 'vue';
import Router from 'vue-router';
import PlayList from './views/PlayList.vue';
import Player from './views/Player.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: PlayList,
      children: [
        { path: '', name: 'main' },
        { path: 'playlist', name: 'playlist' },
      ],
    },
    {
      path: '/player',
      component: Player,
      children: [
        { path: '', name: 'none-play', props: true },
        { path: ':songId', name: 'player', props: true },
      ],
    },
  ],
});
