<template>
  <li class="music-item">
    <span class="music-name">{{ music.name }}</span>
    <span class="music-artist">{{ music.artist }}</span>
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
