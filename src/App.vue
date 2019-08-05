<template>
  <div id="app">
    <player-component
      @show-list="showPlaylist = true"
      v-if="!showPlaylist"
    ></player-component>
    <playlist-component
      @close-list="showPlaylist = false"
      v-if="showPlaylist"
      class="playlist"
    ></playlist-component>
  </div>
</template>

<script>
import Player from './views/Player.vue';
import PlayList from './views/PlayList.vue';

export default {
  components: {
    'player-component': Player,
    'playlist-component': PlayList,
  },
  data: () => ({
    showPlaylist: true,
  }),
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

.playlist {
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: $padding-left;
}
</style>
