<template>
  <div class="play-list">
    <h1>play-list</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {

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
