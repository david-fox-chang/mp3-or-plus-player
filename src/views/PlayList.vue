<template>
  <div class="play-list"
    :style="`background-image: url(${image});`"
  >
    <div class="title-and-tools">
      <img src="../assets/btn-back.svg" alt="back"
        @click="$emit('close-list');"
      >
      <span class="title-text">playlist</span>
      <img src="../assets/btn-more.svg" alt="more">
    </div>
    <ul class="list">
      <template v-for="music in playlists" tag="ul" class="list">
        <music-item :music="music" :key="`${music.id}-${music.randomId}`"
          @play="play"
        ></music-item>
        <div class="line" :key="`${music.id}-${music.randomId}-line`"></div>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MusicItem from '../components/MusicItem.vue';
import tempImage from '../assets/temp-bed-and-breakfast.png';

export default {
  components: {
    'music-item': MusicItem,
  },
  computed: {
    ...mapState([
      'playlists',
    ]),
    ...mapGetters([
      'playing',
    ]),
  },
  mounted() {
    this.getplaylists();
    this.getplaying();
  },
  data: () => ({ image: tempImage }),
  methods: {
    getplaylists() {
      console.log('playlists', this.playlists);
    },
    getplaying() {
      console.log('playing', this.playing);
    },
    play() {
      this.$emit('close-list');
      console.log('play');
    },
  },
};
</script>

<style lang="less" scoped>
.title-and-tools {
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  padding-bottom: 40px;

  & > img {
    height: 50px;
    width: auto;
    vertical-align: top;
    cursor: pointer;
  }
}

.title-text {
  font-size: 28px;
  text-transform: uppercase;
  line-height: 50px;
  font-weight: bold;
  color: #FFF;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
}

.play-list {
  & > * {
    position: relative;
    z-index: 1;
  }
  &::before {
    background-image: linear-gradient(to top, #FFF 0, #FFF 75%, transparent);
    opacity: 0.9;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }
}

.list {
  height: calc(100% - 130px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
     display: none;
  }
}

.line {
  width: 100%;
  height: 2px;
  background-color: #E9E9E9;
}

</style>

