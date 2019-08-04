<template>
  <div class="play-list">
    <h1>play-list</h1>
    <ul class="list">
      <music-item
        v-for="music in playlists" :key="`${music.id}-${music.randomId}`"
        :music="music"
      ></music-item>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MusicItem from '../components/MusicItem.vue';

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
  methods: {
    getplaylists() {
      console.log('playlists', this.playlists);
    },
    getplaying() {
      console.log('playing', this.playing);
    },
  },
};
</script>
