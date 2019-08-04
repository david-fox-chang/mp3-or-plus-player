<template>
  <div class="player ad-relative">
    <ad-component
      v-if="showAd"
      :music="player.music"
      @follow="follow"
      @close-ad="closeAd"
    ></ad-component>
    {{ player }}
  </div>
</template>

<script>
import { mapState /* , mapGetters */ } from 'vuex';
import AD from '../components/Ad.vue';

export default {
  components: {
    'ad-component': AD,
  },
  data: () => ({
    showAd: true,
  }),
  computed: {
    ...mapState([
      'player',
    ]),
  },
  methods: {
    follow() {
      console.log('follow');
    },
    closeAd() {
      this.showAd = false;
    },
  },
};
</script>

<style lang="less" scoped>

.ad-relative {
  position: relative;
}

.player {
  height: 100%;
  width: 100%;
}


</style>

