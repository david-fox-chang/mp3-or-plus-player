import Vue from 'vue';
import Vuex from 'vuex';
import helper from './helper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlists: helper.defaultList,
    player: {},
  },
  mutations: {

  },
  actions: {

  },
});
