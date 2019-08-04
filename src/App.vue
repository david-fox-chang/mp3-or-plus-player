<template>
  <div id="app">
    <player-component
      v-if="showPlayer || 1"
    ></player-component>
    <playlist-component
      v-if="show.playlist"
    ></playlist-component>
    <ad-component
      v-if="show.ad"
    ></ad-component>
  </div>
</template>

<script>
import AD from './views/Ad.vue';
import Player from './views/Player.vue'
import PlayList from './views/PlayList.vue'

export default {
  components: {
    'ad-component': AD,
    'player-component': Player,
    'playlist-component': PlayList,
  },
  data: () => ({
    show: {
      ad: true,
      playlist: true,
    },
  }),
  computed: {
    showPlayer: {
      get() {
        return !this.show.playlist;
      },
    },
  },
};
</script>

<style lang="less">
@import './styles/animate.min.css';
@import './styles/reset.css';
@import './styles/font.css';
@import './styles/global.less';
</style>

<style lang="less" scoped>
@import (reference) './styles/helper.less';
#app {
  width: 375px;
  height: 812px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  .line-tmp();
}
</style>
