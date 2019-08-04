<template>
  <div class="play-list">
    <h1>play-list</h1>
    <router-link :to="{ name: 'none-play' }">none-play</router-link>
    <router-link :to="{ name: 'player', params: { songId: 'asdreh' } }">player</router-link>
  </div>
</template>

<script>

export default {

};
</script>
