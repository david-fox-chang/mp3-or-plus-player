import Vue from 'vue';
import Vuex from 'vuex';
import helper from './helper';
import { PLAYER_TIME, PLAYER_TIMER, PLAYER_COUNT_DOWN } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlists: helper.defaultList,
    player: {
      timeLine: undefined,
      timer: undefined,
      music: helper.defaultList[0],
    },
  },
  getters: {
    playing(state) {
      return state.playlists;
    },
  },
  mutations: {
    [PLAYER_TIME](state, payload) {
      state.player.timeLine += payload.deltaTime;
    },
    [PLAYER_TIMER](state, payload) {
      state.player.timer += payload.deltaTime;
    },
    [PLAYER_COUNT_DOWN](state, payload) {
      state.commit(PLAYER_TIME, payload);
      state.commit(PLAYER_TIMER, payload);
    },
  },
  actions: {

  },
});
