<template>
  <div class="player ad-relative"
    :style="`background-image: url(${image});`"
  > <ad-component
      v-if="showAd"
      :music="player.music"
      @follow="follow"
      @close-ad="closeAd"
    ></ad-component>
    <div class="decorative-frame"></div>
    <div class="player-info-and-controller">
      <span class="name"
        @click="$emit('show-list')"
      >{{ getMusic('name') }}</span>
      <span class="artist">{{ getMusic('artist') }}</span>
      {{ getMusic('length') }}
      <div class="timer-wrapper">
        <div class="timer-bar"
          :style="`--progress: ${10}%;`"
          @click="timerBarChange"
        >
          <div class="progress" draggable="draggable"
            @dragend="timerBarChange"
            @drag="timerBarChange"
          ></div>
        </div>
        <span class="timer">{{ player.timer }}</span>
        <span class="remaining">{{ remainingTime }}</span>
      </div>
      <div class="controller-btns">
        <div class="stop"></div>
        <div class="rewind"></div>
        <div class="play-container"
          :class="[`${playCtrl.eventId ? 'pause' : 'play' }`]"
          @click="playBtnEvent"
        ></div>
        <div class="forward"></div>
        <div class="repeat-mode"
          :class="repeatMode"
          @click="repeatModeChange"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations /* , mapGetters */ } from 'vuex';
import AD from '../components/Ad.vue';
import tempImage from '../assets/temp-bed-and-breakfast.png';
import { PLAYER_COUNT_DOWN } from '../mutation-types';

export default {
  components: {
    'ad-component': AD,
  },
  data: () => ({
    showAd: false,
    remainingTime: 0,
    repeatModeIndex: 0,
    playCtrl: {
      eventId: undefined,
      startTimestamp: 0,
    },
  }),
  computed: {
    ...mapState([
      'player',
    ]),
    image: {
      get() {
        if (typeof this.player.music.image === 'string') {
          if (this.player.music.image.match(/^https?/)) {
            return this.player.music.image;
          }
        }
        return tempImage;
      },
    },
    repeatMode: {
      get() {
        return [
          'none', 'repeat-all', 'repeat-one', 'shuffle-playback',
        ][this.repeatModeIndex];
      },
    },
  },
  methods: {
    ...mapMutations([
      { countDown: PLAYER_COUNT_DOWN },
    ]),
    follow() {
      console.log('follow');
    },
    closeAd() {
      this.showAd = false;
    },
    getMusic(name) {
      return this.player.music[name];
    },
    playBtnEvent() {
      this[this.playCtrl.eventId ? 'pause' : 'playing']();
    },
    playCallback(now) {
      const process = now - this.playCtrl.startTimestamp;
      // this.countDown({ timer: process });
      console.log(process);
      this.playCtrl.eventId = requestAnimationFrame(this.playCallback);
    },
    playing() {
      this.playCtrl.startTimestamp = (new Date()).getTime();
      this.playCtrl.eventId = requestAnimationFrame(this.playCallback);
    },
    pause() {
      cancelAnimationFrame(this.playCtrl.eventId);
      this.playCtrl.eventId = undefined;
    },
    stop() {
      cancelAnimationFrame(this.playCtrl.eventId);
      this.playCtrl.eventId = undefined;
    },
    repeatModeChange() {
      this.repeatModeIndex += 1;
      if (this.repeatModeIndex === 4) this.repeatModeIndex = 0;
    },
    timerBarChange(e) {
      console.log('timerBarChange', e);
    },
  },
  watch: {
    [['player.timer']](newTimer) {
      this.remainingTime = this.getMusic('length') - newTimer;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../styles/player.less';
</style>
