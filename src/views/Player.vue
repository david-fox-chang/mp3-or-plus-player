<template>
  <div class="player">
    <h1>player</h1>
    <p>param: {{ this.$route.params }}</p>
    <ad-component></ad-component>
    <router-link :to="{ name: 'main' }">main</router-link>
    <router-link :to="{ name: 'playlist' }">playlist</router-link>
  </div>
</template>

<script>
import AD from '../components/Ad.vue';

export default {
  components: {
    'ad-component': AD,
  },
};
</script>
