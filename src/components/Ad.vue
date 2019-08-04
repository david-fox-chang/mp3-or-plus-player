<template>
  <div class="adv-wrapper">
    <div class="music-info-wrapper">
      <div class="music-thumbnail"
        :style="`background-image: url(${thumbnail})`"
      ></div>
      <div class="music-info">
        <span class="name">{{ name }}</span>
        <span class="artist" @click="follow">{{ artist }}</span>
        <div class="follow" @click="closeAd">follow</div>
      </div>
    </div>
    <div class="not-follow"
      @click="closeAd"
    >No, thanks.</div>
  </div>
</template>

<script>
import tempThumbnail from '../assets/temp-ad-small.png';

export default {
  props: {
    music: {
      type: Object,
    },
  },
  computed: {
    artist: {
      get() {
        return this.music.artist;
      },
    },
    name: {
      get() {
        return this.music.name;
      },
    },
    thumbnail: {
      get() {
        if (this.music.thumbnail) {
          if (this.music.thumbnail.match(/^https?/)) {
            return this.music.thumbnail;
          }
        }
        return tempThumbnail;
      },
    },
  },
  methods: {
    follow() {
      this.$emit('follow');
      this.closeAd();
    },
    closeAd() {
      this.$emit('close-ad');
    },
  },
};
</script>

<style lang="less" scoped>
.adv-wrapper {
  background-color: rgba(65, 61, 61, 0.85);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.music-info-wrapper {
  width: 327px;
  margin-right: auto;
  margin-left: auto;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: $border-bottom-left-radius;
  background-color: #FFF;
  margin-top: 140 / 375 * 100%;
}

.music-thumbnail {
  width: 100%;
  height: 288px;
  background-position: center center;
  background-size: contain;
}

.follow {
  background-color: #413D3D;
  width: 160px;
  height: 50px;
  border-radius: $height/2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  margin-right: auto;
  margin-left: auto;
}

.music-info {
  padding-top: 20px;
  padding-bottom: $padding-top;
}

.name, .artist {
  display: block;
  text-align: center;
}

.name {
  font-size: 22px;
  font-weight: bold;
}

.artist {
  font-size: 16px;
  margin-bottom: 15px;
}

.not-follow {
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  margin-top: 15px;
  text-align: center;
}

.follow, .not-follow {
  cursor: pointer;
}

</style>
