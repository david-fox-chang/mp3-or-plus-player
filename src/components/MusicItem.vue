<template>
  <li class="music-item">
    <span class="music-name"
      @click="$emit('play', music)"
    >{{ music.name }}</span>
    <span class="music-artist">{{ music.artist }}</span>
    <span class="small-btns"
      :class="[`${ music.isPlaying ? 'pause' : 'play' }`]"
      @click="$emit('play', music)"
    ></span>
  </li>
</template>

<script>
export default {
  props: {
    music: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.music-item {
  width: 100%;
  height: 70px;
  padding: 12px 0 14px;
}

.music-name, .music-artist {
  display: block;
}

.music-name {
  font-size: 22px;
  color: #413D3D;
  cursor: pointer;
}

.music-artist {
  font-size: 16px;
  color: #B2B2B2;
}

.small-btns {
  display: block;
  float: right;
  width: 50px;
  height: 50px;
  margin-top: -50px;
  cursor: pointer;
  &.pause {
    background-image: url('../assets/btn-small-pause.svg')
  }
  &.play {
    background-image: url('../assets/btn-small-play.svg')
  }
  &::after {
    content: '';
    clear: both;
  }
}
</style>
