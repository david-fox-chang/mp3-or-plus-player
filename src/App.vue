<template>
  <div id="app">
    <player-component></player-component>
    <playlist-component
      v-if="0 && showPlaylist"
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
</style>
